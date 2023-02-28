import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class Date {
    private LocalDate[] dates;

    public Date() {
        dates = new LocalDate[10];
        LocalDate actualDate = LocalDate.now();
        LocalDate previusDate = actualDate.minus(5, ChronoUnit.DAYS);
        LocalDate followingDate = actualDate.plus(5, ChronoUnit.DAYS);

        for (int i = 0; i < 10; i++) {
            if (i < 5) {
                dates[i] = previusDate;
                previusDate = previusDate.plus(1, ChronoUnit.DAYS);
            } else {
                dates[i] = followingDate;
                followingDate = followingDate.plus(1, ChronoUnit.DAYS);
            }
        }
    }
    /*
    Counts the number of dates in the array that are before or after the current date
    using a for-each loop and the isBefore() and isAfter() methods of the LocalDate class.
    The number of dates before and after the current date are printed to the console.
     */

    public void filterDates() {
        LocalDate actualDate = LocalDate.now();
        int previusDates = 0;
        int followingDates = 0;

        for (LocalDate date : dates) {
            if (date.isBefore(actualDate)) {
                previusDates++;
            } else if (date.isAfter(actualDate)) {
                followingDates++;
            }
        }

        System.out.println("dates previus to actual date: " + previusDates);
        System.out.println("dates following to actual date: " + followingDates);
    }
/*

        method prints all 10 dates in the array to the console, along with an indicator of whether each date is before,
        after, or equal to the current date.
        This is done using another for-each loop and conditional statements to check the relationship between each date and the current date.
 */
    public void showDates() {
        System.out.println("Dates based on actual Date:");
        for (LocalDate date : dates) {
            String indicator = "=";
            if (date.isBefore(LocalDate.now())) {
                indicator = "Previus";
            } else if (date.isAfter(LocalDate.now())) {
                indicator = "Following";
            }
            System.out.println(indicator + " " + date);
        }
    }
}
