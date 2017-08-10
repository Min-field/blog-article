#include <iostream>
#include <cstdlib>
#include <vector>
using namespace std; 

int main(){
    int n, t, c; 
    int count = 0, total = 0, num; 
    vector<int> v; 
    while(cin >> n >> t >> c){
        int tmp = n;
        v.clear();
        total = 0; 
        count = 0; 
        while(tmp--){
            cin >> num; 
            v.push_back(num);
        }
        for(int i = 0; i < c; i++)
            total += v[i];
        
        if(total <= t)
            count++; 
        
        for(int i = c; i < n; i++){
            total = total + v[i] - v[i - c];
            if(total <= t)
                count++;
        }
        cout << count << endl;
    }
    return 0;
}