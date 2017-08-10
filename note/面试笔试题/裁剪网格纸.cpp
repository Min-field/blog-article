#include <iostream>
#include <vector>
#include <cmath>
#include <iomanip>
using namespace std; 

int main(){
    int n; 
    cout << setprecision(2) << fixed << 3.145878  << endl; 
    while(cin >> n){
        int tmp = n; 
        int x , y; 
        int minX = (0 << 30), 
            minY = (0 << 30),
            maxX = 0 - (0 << 30),
            maxY = 0 - (0 << 30);

        while(tmp--){
            cin >> x >> y; 
            minX = min(minX, x); 
            minY = min(minY, y); 
            maxX = max(maxX, x);
            maxY = max(maxY, y);
        }
        int s = max(maxY - minY, maxX - minX);
        cout << s * s << endl;
    }
    return 0; 
}