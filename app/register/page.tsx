"use client";

import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Globe2, MapPin, Users } from "lucide-react";

type RunnerType = "international" | "tunisia";

type FormState = {
  race: string;
  lastName: string;
  firstName: string;
  gender: "male" | "female" | "";
  birthday: string;
  nationality: string;
  passport: string;
  cin: string;
  phone: string;
  email: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  medical: string;
  remarks: string;
  size: string;
  terms: boolean;
};

const initialForm: FormState = {
  race: "",
  lastName: "",
  firstName: "",
  gender: "",
  birthday: "",
  nationality: "",
  passport: "",
  cin: "",
  phone: "",
  email: "",
  address: "",
  zip: "",
  city: "",
  country: "",
  medical: "",
  remarks: "",
  size: "",
  terms: false,
};

const raceOptions = [
  "UMED 100Km",
  "UMED 50Km",
  "25Km Desert Trail",
  "Accompanist",
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export default function RegisterPage() {
  const [formType, setFormType] = useState<RunnerType>("international");
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const isTunisia = formType === "tunisia";

const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >
) => {
  const { name, value } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.terms) return;
    setSubmitted(true);
    // TODO: send to backend
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <Layout>
      <section className="py-20 bg-linear-to-b from-gray-50 to-background dark:from-gray-900 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#F5C542] text-sm font-semibold tracking-widest uppercase mb-3">
              Registration
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Register for UMED 2026
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Please fill out the form below. Select the correct form depending
              on whether you are registering from Tunisia or abroad.
            </p>
          </div>

          {/* Form type toggle */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-full border border-border bg-background/80 p-1 shadow-sm">
              <button
                type="button"
                onClick={() => setFormType("international")}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition ${
                  formType === "international"
                    ? "bg-[#F5C542] text-black shadow"
                    : "text-muted-foreground"
                }`}
              >
                International
              </button>
              <button
                type="button"
                onClick={() => setFormType("tunisia")}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition ${
                  formType === "tunisia"
                    ? "bg-[#F5C542] text-black shadow"
                    : "text-muted-foreground"
                }`}
              >
                Tunisia
              </button>
            </div>
          </div>

          <Card className="max-w-5xl mx-auto">
            <CardHeader className="flex flex-col gap-3">
              <CardTitle className="text-2xl flex items-center gap-3">
                <Globe2 className="h-6 w-6 text-[#F5C542]" />
                {formType === "international"
                  ? "International registration form"
                  : "Registration form for Tunisia"}
              </CardTitle>
              <p className="text-muted-foreground">
                {isTunisia
                  ? "Fields are shown in English / Français."
                  : "Fields are shown in English / Français / Italiano."}
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* Race selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold">
                      Register as...
                    </label>
                    <select
                      name="race"
                      value={form.race}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5C542]/30"
                      required
                    >
                      <option value="">Select</option>
                      {raceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold">
                      Size / Taille / Taglia
                    </label>
                    <select
                      name="size"
                      value={form.size}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5C542]/30"
                      required
                    >
                      <option value="">Select</option>
                      {sizes.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Identity */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    label={
                      isTunisia
                        ? "Name / Nom de famille"
                        : "Name / Nom de famille / Cognome"
                    }
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    label={
                      isTunisia
                        ? "First Name / Prénom"
                        : "First Name / Prénom / Nome"
                    }
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Gender & Birthday */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold">
                      {isTunisia
                        ? "Gender / Sexe"
                        : "Gender / Sexe / Sesso"}
                    </label>
                    <div className="flex gap-4">
                      <label className="inline-flex items-center gap-2 text-sm">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked={form.gender === "male"}
                          onChange={handleChange}
                          required
                        />
                        {isTunisia ? "Male / Homme" : "Male / Homme / Uomo"}
                      </label>
                      <label className="inline-flex items-center gap-2 text-sm">
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          checked={form.gender === "female"}
                          onChange={handleChange}
                          required
                        />
                        {isTunisia ? "Female / Femme" : "Female / Femme / Donna"}
                      </label>
                    </div>
                  </div>
                  <InputField
                    label={
                      isTunisia
                        ? "Birthday / Date de naissance"
                        : "Birthday / Date de naissance / Data di nascita"
                    }
                    name="birthday"
                    type="date"
                    value={form.birthday}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Nationality / Passport */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    label={
                      isTunisia
                        ? "Nationality / Nationalité"
                        : "Nationality / Nationalité / Nazionalità"
                    }
                    name="nationality"
                    value={form.nationality}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    label={
                      isTunisia
                        ? "Passport Number / Numéro de passeport"
                        : "Passport Number / Numéro de passeport / Numero di passaporto"
                    }
                    name="passport"
                    value={form.passport}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* CIN for Tunisia */}
                {isTunisia && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField
                      label="CIN (Tunisia ID card) / Numéro de CIN"
                      name="cin"
                      value={form.cin}
                      onChange={handleChange}
                      required={isTunisia}
                    />
                  </div>
                )}

                {/* Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    label={
                      isTunisia
                        ? "Phone Number / Numéro de téléphone"
                        : "Phone Number / Numéro de téléphone / Numero di telefono"
                    }
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    label={
                      isTunisia
                        ? "Email Address / Adresse email"
                        : "Email Address / Adresse email / Indirizzo email"
                    }
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Address */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    label={
                      isTunisia
                        ? "Address / Adresse"
                        : "Address / Adresse / Indirizzo"
                    }
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    label={
                      isTunisia
                        ? "ZIP Code / Code Postal"
                        : "ZIP Code / Code Postal / Codice postale"
                    }
                    name="zip"
                    value={form.zip}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    label={
                      isTunisia
                        ? "City / Ville"
                        : "City / Ville / Città"
                    }
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    label={
                      isTunisia
                        ? "Country / Pays"
                        : "Country / Pays / Nazione"
                    }
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Medical / Remarks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextAreaField
                    label={
                      isTunisia
                        ? "Medical conditions / Conditions médicales"
                        : "Medical conditions / Conditions médicales / Condizioni mediche"
                    }
                    name="medical"
                    value={form.medical}
                    onChange={handleChange}
                    placeholder="Please disclose any medical conditions..."
                  />
                  <TextAreaField
                    label={
                      isTunisia
                        ? "Remarks for the organisation / Remarques"
                        : "Remarks for the organisation / Remarques / Note"
                    }
                    name="remarks"
                    value={form.remarks}
                    onChange={handleChange}
                    placeholder="Additional info for the race organisation..."
                  />
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={form.terms}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                  <div className="text-sm text-muted-foreground">
                    <div>I have read and agreed to the Terms and Conditions</div>
                    <div>J&apos;ai lu et accepte les Termes et Conditions</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-[#F5C542] hover:bg-[#e6b937] text-black font-semibold"
                  >
                    Register
                  </Button>
                  {submitted && (
                    <span className="text-sm text-green-600 flex items-center gap-1">
                      <CheckCircle className="h-4 w-4" />
                      Submitted (demo)
                    </span>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Note by form type */}
          <div className="max-w-5xl mx-auto mt-6 text-sm text-muted-foreground flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#F5C542]" />
            {formType === "international" ? (
              <span>
                You are filling the form for international runners. Tunisian
                runners can switch to the “Tunisia” tab above.
              </span>
            ) : (
              <span>
                Vous remplissez le formulaire pour les participants en Tunisie.
                International runners can switch to “International”.
              </span>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function InputField({
  label,
  name,
  value,
  onChange,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >;
  required?: boolean;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5C542]/30"
      />
    </div>
  );
}

function TextAreaField({
  label,
  name,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={4}
        placeholder={placeholder}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5C542]/30 resize-none"
      />
    </div>
  );
}
