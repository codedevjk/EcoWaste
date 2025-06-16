import { createClient, User, Session } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Temporary mock client for development
const mockSupabase = {
  auth: {
    signUp: async () => ({ data: { user: null, session: null }, error: null }),
    signInWithPassword: async () => ({ data: { user: null, session: null }, error: null }),
    signOut: async () => ({ error: null }),
    getUser: async () => ({ data: { user: null }, error: null })
  },
  from: () => ({
    insert: async () => ({ error: null })
  })
};

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : mockSupabase;

interface SignUpResponse {
  data: {
    user: User | null;
    session: Session | null;
  } | null;
  error: Error | null;
}

export const signUp = async (email: string, password: string): Promise<SignUpResponse> => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/login`,
      },
    });
    
    if (error) {
      console.error('Signup error:', error);
      return { data: null, error };
    }

    return { data, error: null };
  } catch (error) {
    console.error('Unexpected error during signup:', error);
    return { 
      data: null, 
      error: error instanceof Error ? error : new Error('An unexpected error occurred') 
    };
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { error: null };
  } catch (error) {
    return { error };
  }
};

export const getCurrentUser = async () => {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    return { user, error: null };
  } catch (error) {
    return { user: null, error };
  }
}; 