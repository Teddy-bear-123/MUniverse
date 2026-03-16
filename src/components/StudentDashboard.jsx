import React from 'react';
import MainLayout from './MainLayout';

const StudentDashboard = () => {
  return (
    <MainLayout role="Student">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Welcome back, Student!</h1>
        
        {/* Academic Info Grid  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="font-bold text-red-600 mb-4">LATEST ANNOUNCEMENTS</h2>
            <ul className="space-y-3">
              <li className="text-sm p-3 bg-gray-50 rounded border-l-4 border-blue-500">
                End Semester Exam schedule is out.
              </li>
              <li className="text-sm p-3 bg-gray-50 rounded border-l-4 border-blue-500">
                Holiday declared for upcoming festival (kolla's birthday).
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="font-bold text-red-600 mb-4">ACADEMIC RESOURCES</h2>
            <div className="space-y-2">
              <button className="w-full text-left p-2 text-sm hover:bg-gray-50 border rounded">📄 Computer Science - Lecture 04.pdf </button>
              <button className="w-full text-left p-2 text-sm hover:bg-gray-50 border rounded">📄 Database Management - Assignment 1.docx </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StudentDashboard;