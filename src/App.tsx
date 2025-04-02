import React from 'react';
import { Scissors, Clock, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="h-[60vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Nic Coiffure</h1>
            <p className="text-xl">L'art de la coiffure à votre service</p>
          </div>
        </div>
      </div>

      {/* Services et Prix */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Tarifs</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Femmes</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Coupe + Brushing</span>
                <span className="font-semibold">65€</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Coloration</span>
                <span className="font-semibold">55€</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Mèches</span>
                <span className="font-semibold">85€</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Balayage</span>
                <span className="font-semibold">95€</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Hommes</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Coupe</span>
                <span className="font-semibold">28€</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Coupe + Barbe</span>
                <span className="font-semibold">40€</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Taille de barbe</span>
                <span className="font-semibold">15€</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Coloration</span>
                <span className="font-semibold">35€</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4">
            <Clock className="w-6 h-6" />
            <div>
              <h3 className="font-semibold mb-2">Horaires</h3>
              <p>Mar-Sam: 9h-19h</p>
              <p>Dim-Lun: Fermé</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <MapPin className="w-6 h-6" />
            <div>
              <h3 className="font-semibold mb-2">Adresse</h3>
              <p>Commune D'Akpro Miissérété</p>
              <p>Abogome von de l'école AVE Maria</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6" />
            <div>
              <h3 className="font-semibold mb-2">Contact</h3>
              <p>+229 01 41 41 89 61</p>
              <p>nicolasgokunew@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Scissors className="w-6 h-6" />
            <span className="font-semibold">Nic Coiffure</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-600">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-600">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://niccoiffure.netlify.app" className="hover:text-gray-600">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;