import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Megaphone, Clock, User } from 'lucide-react';

const Announcements = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase.from('announcements').select('*').order('created_at', { ascending: false });
      if (data) setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="p-4 bg-gray-50 min-h-screen text-right" dir="rtl">
      <h1 className="text-xl font-bold flex items-center justify-end gap-2 mb-6">
        إعلانات الشركة <Megaphone className="text-blue-600" />
      </h1>
      
      <div className="space-y-4">
        {posts.map((post: any) => (
          <div key={post.id} className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-blue-500">
            <h3 className="font-bold text-lg">{post.title}</h3>
            <p className="text-gray-600 my-2">{post.content}</p>
            <div className="flex justify-between items-center text-xs text-gray-400 mt-4">
              <span className="flex items-center gap-1"><Clock size={12}/> {new Date(post.created_at).toLocaleDateString('ar-MA')}</span>
              <span className="flex items-center gap-1"><User size={12}/> إداره المصنع</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
