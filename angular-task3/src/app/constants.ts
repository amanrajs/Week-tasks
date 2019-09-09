export class AppConstants {
    public static get baseURL(): string { return "http://localhost:4200/api"; }
    public static get all_channel(): string { return "All channels"; }
    public static get imgPath(): string { return "../img/download.png"; };
    public static get email(): string { return 'aman@epam' };
    public static get password(): string { return 'hello' };
    public static get adminEmail(): string { return 'admin' };
    public static get adminPassword(): string { return 'admin' };
    public static get wrongDetails(): string { return "wrong credentials" };
    public static get dataUrl(): string { return 'http://localhost:4200/assets/data/newsArticles.json' };

}