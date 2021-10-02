/*dikerjakan menggunakan Java
  oleh Fitria Salma*/

import java.util.Scanner;

public class Bonus2 {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n;
        n = scan.nextInt();
        int daftar_nilai = 3;
        String[][] nama = new String[n][3];
        for(int d = 0; 0 < nama.length; d++){
            for(int i = 0; i < nama[d].length; i++){
                nama[d][i] = scan.nextLine();
            }
            
        }
    }
    
}
