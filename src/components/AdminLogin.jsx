'use client';

import React, { useState, useEffect, useRef } from 'react';
import { db } from '@/firebase/firebaseConfig';
import { 
  collection, 
  getDocs, 
  query, 
  orderBy,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore';
import emailjs from 'emailjs-com';

const AdminLogin = () => {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  
  // Booking data state
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterDate, setFilterDate] = useState('');
  const [filterLocation, setFilterLocation] = useState('all');
  const [filterName, setFilterName] = useState('');
  const [loadingBookings, setLoadingBookings] = useState({});
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  
  // Refs for tables
  const bookingsTableRef = useRef(null);
  
  // Admin credentials
  const ADMIN_USERNAME = 'admin';
  const ADMIN_PASSWORD = '12345';

  // Format time to 12-hour format with AM/PM
  const formatTime = (time24h) => {
    if (!time24h) return '';
    const [hours, minutes] = time24h.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setLoginError('');
      sessionStorage.setItem('isAdminAuthenticatedNikita', 'true');
    } else {
      setLoginError('Invalid username or password');
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAdminAuthenticatedNikita');
  };

  // Check session storage for authentication on component mount
  useEffect(() => {
    const authStatus = sessionStorage.getItem('isAdminAuthenticatedNikita');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch bookings when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchBookings();
    }
  }, [isAuthenticated]);
  
  // Apply filters when filter values change
  useEffect(() => {
    if (bookings.length > 0) {
      applyBookingsFilters();
    }
  }, [bookings, filterDate, filterLocation, filterName]);

  // Fetch bookings from Firestore
  const fetchBookings = async () => {
    if (!db) {
      console.error("Firebase database connection not established");
      return;
    }
  
    setIsLoading(true);
  
    try {
      const bookingsRef = collection(db, "bookings");
      const q = query(bookingsRef, where("doctorType", "==", "dr_nikita"));
      const querySnapshot = await getDocs(q);
      
      const bookingsData = [];
  
      querySnapshot.forEach((doc) => {
        bookingsData.push({
          id: doc.id,
          ...doc.data(),
        });
      });
  
      setBookings(bookingsData);
      setFilteredBookings(bookingsData);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Apply filters to bookings
  const applyBookingsFilters = () => {
    let filtered = [...bookings];
    
    // Apply date filter
    if (filterDate) {
      filtered = filtered.filter(booking => booking.date === filterDate);
    }
    
    // Apply location filter
    if (filterLocation !== 'all') {
      filtered = filtered.filter(booking => booking.consultationType === filterLocation);
    }
    
    // Apply name filter
    if (filterName) {
      const searchTerm = filterName.toLowerCase();
      filtered = filtered.filter(booking => 
        (booking.fullName?.toLowerCase().includes(searchTerm)) || 
        (booking.email?.toLowerCase().includes(searchTerm)) || 
        (booking.phoneNumber?.includes(searchTerm))
      );
    }
    
    setFilteredBookings(filtered);
  };

  // Clear filters
  const clearFilters = () => {
    setFilterDate('');
    setFilterLocation('all');
    setFilterName('');
  };

  // Handle date filter change
  const handleDateFilterChange = (e) => {
    setFilterDate(e.target.value);
  };
  
  // Handle location filter change
  const handleLocationFilterChange = (e) => {
    setFilterLocation(e.target.value);
  };
  
  // Handle name filter change
  const handleNameFilterChange = (e) => {
    setFilterName(e.target.value);
  };

  // Function to handle accepting a consultation
  const handleAcceptConsultation = async (booking) => {
    try {
      setLoadingBookings(prev => ({ ...prev, [booking.id]: 'accepting' }));

      const bookingRef = doc(db, "bookings", booking.id);
      await updateDoc(bookingRef, {
        status: "accepted",
      });

      const templateParams = {
        to_name: booking.fullName,
        to_email: booking.email,
        date: formatDate(booking.date),
        time: formatTime(booking.timeSlot),
        status: "accepted",
        doctor_name: "Dr. Nikita Sharma",
        doctor_speciality: "Pedodontist & Child Dental Specialist",
        doctor_credentials: "B.D.S., M.D.S.",
        doctor_initials: "NS",
        doctor_phone: "+91 98765 43210",
        consultation_type: booking.consultationType === 'hospital' ? 'Morning Session (10AM-12PM)' : 'Evening Session (5PM-7PM)',
        location: booking.consultationType === 'hospital' 
          ? "Paras Urology Hospital, Haribhau Upadhyay Nagar, C-Block, Pushkar Road, Ajmer"
          : "Nivik Smile Care, Ajmer"
      };

      await emailjs.send(
        "service_ptrjme3", // Use Dr. Nikita's EmailJS service
        "template_mjozq4o", // Use Dr. Nikita's email template
        templateParams,
        "g45rTVxOaQ2qWUKTt" // EmailJS user ID
      );

      fetchBookings();
    } catch (error) {
      console.error("Error accepting consultation:", error);
    } finally {
      setLoadingBookings(prev => ({ ...prev, [booking.id]: false }));
    }
  };

  // Function to handle declining a consultation
  const handleDeclineConsultation = async (booking) => {
    try {
      setLoadingBookings(prev => ({ ...prev, [booking.id]: 'declining' }));

      const bookingRef = doc(db, "bookings", booking.id);
      await updateDoc(bookingRef, {
        status: "declined",
      });

      const templateParams = {
        to_name: booking.fullName,
        to_email: booking.email,
        date: formatDate(booking.date),
        time: formatTime(booking.timeSlot),
        status: "declined",
        doctor_name: "Dr. Nikita Sharma",
        doctor_speciality: "Pedodontist & Child Dental Specialist",
        doctor_credentials: "B.D.S., M.D.S.",
        doctor_initials: "NS",
        doctor_phone: "+91 98765 43210",
        consultation_type: booking.consultationType === 'hospital' ? 'Morning Session (10AM-12PM)' : 'Evening Session (5PM-7PM)',
        location: booking.consultationType === 'hospital' 
          ? "Paras Urology Hospital, Haribhau Upadhyay Nagar, C-Block, Pushkar Road, Ajmer"
          : "Nivik Smile Care, Ajmer"
      };

      await emailjs.send(
        "service_ptrjme3",
        "template_mjozq4o",
        templateParams,
        "g45rTVxOaQ2qWUKTt"
      );

      fetchBookings();
    } catch (error) {
      console.error("Error declining consultation:", error);
    } finally {
      setLoadingBookings(prev => ({ ...prev, [booking.id]: false }));
    }
  };

  const handleDeleteConsultation = async (bookingId) => {
    try {
      setLoadingBookings(prev => ({ ...prev, [bookingId]: 'deleting' }));
      await deleteDoc(doc(db, "bookings", bookingId));
      fetchBookings();
    } catch (error) {
      console.error("Error deleting consultation:", error);
    } finally {
      setLoadingBookings(prev => ({ ...prev, [bookingId]: false }));
      setDeleteConfirmation(null);
    }
  };

  const DeleteConfirmationModal = ({ booking, onConfirm, onCancel }) => {
    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 transform transition-all">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-red-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Confirm Deletion
            </h3>
            <button onClick={onCancel} className="text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-700 mb-2">Are you sure you want to delete this appointment?</p>
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-red-800">Patient: {booking.fullName}</h4>
                  <div className="mt-1 text-sm text-red-700">
                    <p>{formatDate(booking.date)} at {formatTime(booking.timeSlot)}</p>
                    <p>This action cannot be undone.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              onClick={onCancel}
              className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Cancel
            </button>
            <button
              onClick={() => onConfirm(booking.id)}
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              {loadingBookings[booking.id] === 'deleting' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Deleting...
                </>
              ) : 'Delete Permanently'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-teal-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-teal-800">
              Dr. Nikita's Admin Panel
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Please sign in to access booking details
            </p>
          </div>
          
          {loginError && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md relative">
              <strong>Error:</strong> {loginError}
            </div>
          )}
          
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md -space-y-px">
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out shadow-md"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Admin dashboard
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-teal-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-xl shadow-md">
          <div>
            <h1 className="text-3xl font-bold text-teal-800">Dr. Nikita Sharma's Admin Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage Pediatric Dental Appointments</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-2 px-6 rounded-lg text-sm font-medium shadow-md transition duration-150 ease-in-out flex items-center"
          >
            Logout
          </button>
        </div>
        
        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-xl font-bold text-teal-800 mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                value={filterDate}
                onChange={handleDateFilterChange}
                className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <select
                value={filterLocation}
                onChange={handleLocationFilterChange}
                className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
              >
                <option value="all">All Locations</option>
                <option value="hospital">Morning Session (10AM-12PM)</option>
                <option value="evening_clinic">Evening Session (5PM-7PM)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Search Name/Email/Phone</label>
              <input
                type="text"
                value={filterName}
                onChange={handleNameFilterChange}
                placeholder="Search..."
                className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={clearFilters}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md text-sm font-medium shadow transition duration-150 ease-in-out flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Clear Filters
              </button>
            </div>
          </div>
        </div>
        
        {/* Bookings table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-teal-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Appointment Bookings
              <span className="ml-3 text-sm font-normal text-gray-500">
                ({filteredBookings.length} {filteredBookings.length === 1 ? 'booking' : 'bookings'})
              </span>
            </h2>
          </div>
          {isLoading ? (
            <div className="p-6 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500"></div>
              <p className="text-gray-600 mt-2">Loading bookings...</p>
            </div>
          ) : filteredBookings.length === 0 ? (
            <div className="p-6 text-center">
              <div className="inline-block rounded-full p-3 bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <p className="text-gray-600 mt-2">No bookings found matching your filters.</p>
              <button
                onClick={clearFilters}
                className="mt-2 text-teal-600 hover:text-teal-800 text-sm font-medium"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="relative">
              <div 
                className="overflow-y-auto max-h-96 scrollbar-track-transparent scrollbar-thumb-teal-500 scrollbar-thin" 
                style={{ maxHeight: '400px' }}
                ref={bookingsTableRef}
              >
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 sticky top-0 z-10">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredBookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-teal-50 transition duration-150">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{booking.fullName}</div>
                          {booking.childAge && (
                            <div className="text-xs text-gray-500">Child Age: {booking.childAge}</div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{booking.phoneNumber}</div>
                          <div className="text-sm text-gray-500">{booking.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            booking.consultationType === 'hospital' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-orange-100 text-orange-800'
                          }`}>
                            {booking.consultationType === 'hospital' ? 'Morning (Paras Hospital)' : 'Evening (Nivik Smile)'}
                          </span>
                          <div className="text-xs text-gray-500 mt-1">
                            {booking.consultationType === 'hospital' 
                              ? "10:00 AM - 12:00 PM" 
                              : "5:00 PM - 7:00 PM"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{formatDate(booking.date)}</div>
                          <div className="text-sm text-gray-500">{formatTime(booking.timeSlot)}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            booking.status === 'accepted' 
                              ? 'bg-green-100 text-green-800' 
                              : booking.status === 'declined' 
                              ? 'bg-red-100 text-red-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {booking.status || 'Pending'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleAcceptConsultation(booking)}
                              disabled={loadingBookings[booking.id]}
                              className={`${loadingBookings[booking.id] === 'accepting' ? 'opacity-50 cursor-not-allowed' : ''} bg-teal-500 hover:bg-teal-600 text-white py-1 px-3 rounded-md text-sm font-medium`}
                            >
                              {loadingBookings[booking.id] === 'accepting' ? (
                                <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                              ) : 'Accept'}
                            </button>
                            <button
                              onClick={() => handleDeclineConsultation(booking)}
                              disabled={loadingBookings[booking.id]}
                              className={`${loadingBookings[booking.id] === 'declining' ? 'opacity-50 cursor-not-allowed' : ''} bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md text-sm font-medium`}
                            >
                              {loadingBookings[booking.id] === 'declining' ? (
                                <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                              ) : 'Decline'}
                            </button>
                            <button
                              onClick={() => setDeleteConfirmation(booking)}
                              disabled={loadingBookings[booking.id]}
                              className="text-gray-500 hover:text-red-600 p-1 transition-colors duration-200"
                              title="Delete Appointment"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
      {deleteConfirmation && (
        <DeleteConfirmationModal
          booking={deleteConfirmation}
          onConfirm={handleDeleteConsultation}
          onCancel={() => setDeleteConfirmation(null)}
        />
      )}
    </div>
  );
};

export default AdminLogin;