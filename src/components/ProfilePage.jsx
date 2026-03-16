import React from 'react';
import MainLayout from './MainLayout';

const ProfilePage = () => {
  return (
    <MainLayout role="User">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center space-x-6 mb-8 border-b pb-8">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-3xl font-bold">
            VS
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Varshneya Kolla</h1>
            <p className="text-gray-500">Student ID: MU2026-001</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
            <p className="p-3 bg-gray-50 rounded border text-gray-700">varshneya.k@mahindra.edu</p>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Primary Role</label>
            <p className="p-3 bg-gray-50 rounded border text-gray-700">Student</p>
          </div>
        </div>
        
        <button className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Edit Profile
        </button>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;