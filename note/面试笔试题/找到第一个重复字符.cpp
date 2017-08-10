class FirstRepeat {
public:
    char findFirstRepeat(string A, int n) {
        set<char> s; 
        for(int i = 0; i < n; i++) {
            if(s.find(A[i]) == s.end())
               s.insert(A[i]);
            else { 
                return A[i]; 
            }
        }
        return 0;
    }
};