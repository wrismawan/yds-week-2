#include<bits/stdc++.h>

using namespace std;

int main(){
    char nama[10][100];
    double nilai[10][3];
    
    int n;
    scanf("%d", &n);
    for(int i=0;i<n;i++){
        scanf("%s", nama[i]);
        for(int j=0;j<3;j++){
            scanf("%lf", &nilai[i][j]);
        }
    }

    char search[100];
    scanf("%s", search);

    double avg = 0;

    for(int i=0;i<n;i++){
       if(strcmp(search, nama[i]) == 0){
           for(int j=0;j<3;j++){
               avg+=nilai[i][j];
           }
           printf("%.2f\n", avg/3);
           break;
       }
    }
}

// saya ga ngerti c++ :)
