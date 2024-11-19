import { createClient } from '@supabase/supabase-js';

const URL = 'https://mmmuzetjfkhicnhrymzz.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tbXV6ZXRqZmtoaWNuaHJ5bXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4NjE5OTAsImV4cCI6MjA0NjQzNzk5MH0.qwbMgKfZEakM_iVtgMcpDDDub7UPqy18lboiQ18KOCY';

export const supabase = createClient(URL, API_KEY);