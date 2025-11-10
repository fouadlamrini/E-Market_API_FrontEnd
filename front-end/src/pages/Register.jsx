import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";

function Register() {
 
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
         const formData = new FormData(e.target);
         const Data = Object.fromEntries(formData.entries());

        try{
        const response = await axios.post("/auth/v1/register", Data);
       if( response.status === 201 ) { 
        console.log("Inscription réussie");     
          navigate("/login");
       } 
       else{
        console.error("Echec de connexion");
       }
             
        }catch(error){
            console.error(error);
        }
    }

  return (
   <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4">
    <div className="w-full max-w-md">

        <h1 className="text-4xl font-light text-center mb-3">Créer un compte</h1>
        
        <p className="text-gray-500 text-center mb-8">
            Rejoignez notre store et commencez à<br/>acheter dès aujourd'hui.
        </p>
        
        <div className="space-y-5">
            <form action="" onSubmit={handleRegister} >
            <div>
                <label for="fullname" className="block text-sm font-medium text-gray-900 mb-2">
                    First Name
                </label>
                <input  name="firstName"
                    type="text" 
                    id="fullname" 
                    placeholder="Entrez votre nom complet"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
               />
            </div>
            <div>
                <label for="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                   Last Name
                </label>
                <input  name="lastName"
                    type="text" 
                    id="fullname" 
                    placeholder="Entrez votre nom complet"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
               />
            </div>

            <div>
                <label for="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Adresse email
                </label>
                <input 
                name="email"
                    type="email" 
                    id="email" 
                    placeholder="Entrez votre email"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                />
            </div>

            <div>
                <label for="password" className="block text-sm font-medium text-gray-900 mb-2">
                    Mot de passe
                </label>
                <div className="relative">
                    <input 
                    name="password"
                        type="password" 
                        id="password" 
                        placeholder="Créez un mot de passe sécurisé"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent pr-12"
                    />
                    <button 
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                    </button>
                </div>
            </div>
            
            {/* <div>
                <label  className="block text-sm font-medium text-gray-900 mb-2">
                    Confirmer le mot de passe
                </label>
                <div className="relative">
                    <input 
                        type="password" 
                        id="confirm-password" 
                        placeholder="Confirmez votre mot de passe"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent pr-12"
                    />
                    <button 
                        type="button"
                        onclick="togglePassword('confirm-password')"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                    </button>
                </div>
            </div> */}
             
            <button type="submit" className="w-full bg-black text-white py-2 rounded font-medium hover:bg-gray-800 transition duration-200 mt-6">
                Créer mon compte
            </button>
           </form> 
            <p className="text-center text-sm text-gray-600 mt-6">
                Déjà un compte? 
                <a href="#" className="text-gray-900 font-medium hover:underline">Se connecter</a>
            </p>
           
        </div>
        
    </div>
</div>
  );
}

export default Register;
