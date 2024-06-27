import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../service/auth.service";

export const AuthGuard = () => {
    const auth = inject(AuthService);
    const router = inject(Router);

    if(!auth.isAuthenticated()) {
        router.navigateByUrl('/accueil')
        return false
    }
    return true
}