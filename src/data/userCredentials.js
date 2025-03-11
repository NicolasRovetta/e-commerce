import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

async function registrarYGuardarUsuario(email, password, otrosDatos) {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        await guardarInformacionUsuario(user.uid, email, otrosDatos);
    } catch (error) {
        console.error("Error durante el registro o guardado:", error);
        if (error.code === 'auth/weak-password') {
            alert("La contraseña debe tener al menos 6 caracteres.");
        }
    }
}

async function guardarInformacionUsuario(uid, email, otrosDatos) {
    try {
        await setDoc(doc(db, "users", uid), {
            email,
            ...otrosDatos
        });
    } catch (error) {
        console.error("Error guardando la información del usuario:", error);
    }
}

async function iniciarSesion(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error("Error durante el inicio de sesión:", error);
        throw error;
    }
}

export { registrarYGuardarUsuario, iniciarSesion };