import { useState } from 'react';
import type { UserFormData } from '../Types/interfaces';
import useAddUser from './hooks/useAddUser';

const AddUser = () => {
    const [formData, setFormData] = useState<UserFormData>({
        name: '',
        username: '',
        website: '',
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        lat: '',
        lng: '',
        email: '',
        phone: '',
        companyName: '',
        catchPhrase: '',
    });

    const { createUser, loading, error, success, resetState } = useAddUser();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        resetState();

        if (!formData.name.trim() || !formData.username.trim() || !formData.email.trim()) {
            alert('Los campos Nombre, Usuario y Email son obligatorios');
            return;
        }

        const result = await createUser(formData);

        if (result) {
            setFormData({
                name: '',
                username: '',
                website: '',
                street: '',
                suite: '',
                city: '',
                zipcode: '',
                lat: '',
                lng: '',
                email: '',
                phone: '',
                companyName: '',
                catchPhrase: '',
            });
        }
    };

    return (
        // Se cambió h-full por min-h-0 y max-w-4xl para estabilidad de flexbox
        <div className="w-full max-w-4xl mx-auto p-4 flex flex-col min-h-0">
            
            {/* Cabecera fija */}
            <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">Add User</h1>
                {success && (
                    <span className="text-green-600 text-sm bg-green-50 px-3 py-1 rounded-full border border-green-200 animate-fade-in">
                        ✅ Usuario creado con éxito
                    </span>
                )}
            </div>

            {/* Formulario con scroll corregido mediante max-h acotado y overflow */}
            <form 
                onSubmit={handleSubmit}
                className="w-full max-h-[calc(100vh-140px)] overflow-y-auto space-y-4 bg-white p-4 md:p-6 rounded-xl border border-gray-200 shadow-sm pr-2 md:pr-4"
            >
                {/* Información básica */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre completo"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Usuario *</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Nombre de usuario"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="correo@ejemplo.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="+34 123 456 789"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Sitio web</label>
                    <input
                        type="text"
                        name="website"
                        placeholder="www.ejemplo.com"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                    />
                </div>

                {/* Sección de dirección */}
                <div className="border-t border-gray-200 pt-4 mt-2">
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">Dirección</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Calle</label>
                            <input
                                type="text"
                                name="street"
                                placeholder="Calle Principal"
                                value={formData.street}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Suite</label>
                            <input
                                type="text"
                                name="suite"
                                placeholder="Apto. 4B"
                                value={formData.suite}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad</label>
                            <input
                                type="text"
                                name="city"
                                placeholder="Madrid"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Código postal</label>
                            <input
                                type="text"
                                name="zipcode"
                                placeholder="28001"
                                value={formData.zipcode}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                            />
                        </div>
                    </div>

                    {/* Georreferencia */}
                    <div className="mt-4 bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Coordenadas (Geo)</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label className="block text-xs text-gray-600 mb-1">Latitud</label>
                                <input
                                    type="text"
                                    name="lat"
                                    placeholder="-37.3159"
                                    value={formData.lat}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-gray-600 mb-1">Longitud</label>
                                <input
                                    type="text"
                                    name="lng"
                                    placeholder="81.1496"
                                    value={formData.lng}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black text-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sección de compañía */}
                <div className="border-t border-gray-200 pt-4 mt-2">
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">Compañía</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                            <input
                                type="text"
                                name="companyName"
                                placeholder="Nombre de la empresa"
                                value={formData.companyName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Frase</label>
                            <input
                                type="text"
                                name="catchPhrase"
                                placeholder="Frase descriptiva"
                                value={formData.catchPhrase}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                            />
                        </div>
                    </div>
                </div>

                {/* Errores de API */}
                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm sticky bottom-0">
                        ❌ {error}
                    </div>
                )}

                {/* Botón de acción */}
                <div className="flex justify-end pt-4 border-t border-gray-200 sticky bottom-0 bg-white">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-500 hover:bg-blue-600 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 w-full md:w-auto shadow-sm"
                    >
                        {loading ? 'Creando usuario...' : 'Crear Usuario'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddUser;