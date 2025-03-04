import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
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

export default registrarYGuardarUsuario;

// Ejemplo de uso:
/*registrarYGuardarUsuario("usuario@ejemplo.com", "Contraseña123", { nombre: "Juan", apellido: "Pérez" })
.then(() => console.log("Proceso completo"))
.catch(error => console.error("Error final:", error));*/