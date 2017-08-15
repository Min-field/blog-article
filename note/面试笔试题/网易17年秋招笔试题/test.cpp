#include<iostream>
using namespace std;
long long sum(long long n) {
    cout << n << endl;
    if (n == 1) {
        return 1;
    }
    if (n % 2 == 0) {
        return  sum(n / 2) + n * n / 4;
    }
    else {
        return sum(n - 1) + n; 
    }
}
int main() {
    long long N;
    cin >> N;
    cout << sum(N) << endl;
}