class BinarySearch {
public:
    int getPos(vector<int> A, int n, int val) {
   	   int pos = -1; 
       int low = 0, high = n - 1, mid; 
       if(val < A[0] || val > A[n-1])
            return pos; 
       while(low <= high){
            mid = (low + high) / 2; 
            if(A[mid] == val){
                pos = mid; 
                break;
            }  
            else if(A[mid] < val)
                low = mid + 1; 
            else 
                high = mid - 1; 
       }
       while(A[pos] == A[--pos]);
       return ++pos; 
    }
};