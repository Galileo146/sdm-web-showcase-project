
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Separator } from "@/components/ui/separator";
import Hero from "../components/Hero";
import InterestSection from "../components/InterestSection";

// Create schema for form validation
const formSchema = z.object({
  firstName: z.string().min(2, { message: "Il nome deve contenere almeno 2 caratteri." }),
  lastName: z.string().min(2, { message: "Il cognome deve contenere almeno 2 caratteri." }),
  profession: z.string().optional(),
  email: z.string().email({ message: "Inserisci un indirizzo email valido." }),
  message: z.string().min(10, { message: "Il messaggio deve contenere almeno 10 caratteri." }),
  acceptPrivacy: z.boolean().refine(val => val === true, {
    message: "Devi accettare l'informativa sulla privacy per procedere."
  })
});

// Location data
const locations = [
  {
    id: "sdm-torino",
    name: "SDM Torino",
    address: "Via Torino 123, 10126 Torino (TO)",
    phone: "+39 011 123 4567",
    email: "info@sdmtorino.it",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91281.85865005247!2d7.6254433953965806!3d45.07039964436548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d126418be25%3A0x8903f803d69c77bf!2sTorino%20TO!5e0!3m2!1sit!2sit!4v1653501287892!5m2!1sit!2sit"
  },
  {
    id: "sdm-rivoli",
    name: "SDM Rivoli",
    address: "Via Rivoli 456, 10090 Rivoli (TO)",
    phone: "+39 011 987 6543",
    email: "info@sdmrivoli.it",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45055.12569243368!2d7.490928777245337!3d45.07037020108354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886adbda946ba5%3A0x4068517a4a25f463!2s10098%20Rivoli%20TO!5e0!3m2!1sit!2sit!4v1653501370637!5m2!1sit!2sit"
  },
  {
    id: "sdm-polska",
    name: "SDM Polska",
    address: "ul. Warszawska 123, 00-001 Warszawa",
    phone: "+48 22 123 45 67",
    email: "info@sdmpolska.pl",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.35438501252!2d20.896370745728377!3d52.233035701271384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sVarsavia%2C%20Polonia!5e0!3m2!1sit!2sit!4v1653501473568!5m2!1sit!2sit"
  },
  {
    id: "chiales-tools",
    name: "Chiales Tools",
    address: "Via degli Utensili 789, 10100 Torino (TO)",
    phone: "+39 011 456 7890",
    email: "info@chialestools.it",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91281.85865005247!2d7.6254433953965806!3d45.07039964436548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d126418be25%3A0x8903f803d69c77bf!2sTorino%20TO!5e0!3m2!1sit!2sit!4v1653501287892!5m2!1sit!2sit"
  }
];

const Contact = () => {
  const [activeTab, setActiveTab] = useState("sdm-torino");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      profession: "",
      email: "",
      message: "",
      acceptPrivacy: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would send this data to your backend
    console.log(values);
    alert("Grazie per averci contattato! Ti risponderemo al più presto.");
    form.reset();
  }

  const currentLocation = locations.find(loc => loc.id === activeTab) || locations[0];

  return (
    <div>
      {/* Hero Banner */}
      <Hero 
        backgroundImage="/lovable-uploads/e145087b-9405-4dab-a4e3-1639632d3532.png"
        title="CONTATTACI" 
        height="450px"
        centerTitle={true}
      />

      {/* Sezione introduttiva */}
      <section className="py-16">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-6 md:mb-0 pr-0 md:pr-8 relative">
              <div className="flex">
                <div className="min-h-full w-0 bg-sdm-red mr-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  COME POSSIAMO<br />AIUTARTI?
                </h2>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="flex">
                <div className="min-h-full w-1 bg-sdm-red mr-4"></div>
                <p className="text-gray-700">
                  Siamo a tua disposizione per qualsiasi informazione o richiesta. 
                  Compila il form sottostante e ti risponderemo nel più breve tempo possibile. 
                  In alternativa, puoi contattarci direttamente telefonicamente o via email 
                  utilizzando i riferimenti indicati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione contatti con tab */}
      <section className="py-12 bg-gray-100">
        <div className="container-wide">
          <Tabs
            defaultValue="sdm-torino"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent mb-8">
              {locations.map(location => (
                <TabsTrigger
                  key={location.id}
                  value={location.id}
                  className="data-[state=active]:bg-sdm-red data-[state=active]:text-white py-4 text-lg font-medium"
                >
                  {location.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {locations.map(location => (
              <TabsContent key={location.id} value={location.id} className="mt-0">
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Colonna sinistra: mappa e dettagli contatto */}
                    <div>
                      <div className="rounded-lg overflow-hidden h-[300px] mb-6">
                        <iframe 
                          src={location.mapUrl}
                          width="100%" 
                          height="100%" 
                          style={{ border: 0 }} 
                          allowFullScreen 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`Mappa sede ${location.name}`}
                        ></iframe>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-xl font-bold mb-3">{location.name}</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="font-semibold w-20">Indirizzo:</span>
                            <span>{location.address}</span>
                          </li>
                          <li className="flex items-start">
                            <span className="font-semibold w-20">Telefono:</span>
                            <a href={`tel:${location.phone}`} className="text-sdm-red hover:underline">
                              {location.phone}
                            </a>
                          </li>
                          <li className="flex items-start">
                            <span className="font-semibold w-20">Email:</span>
                            <a href={`mailto:${location.email}`} className="text-sdm-red hover:underline">
                              {location.email}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* Colonna destra: form di contatto */}
                    <div>
                      <h3 className="text-xl font-bold mb-6">Invia un messaggio</h3>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="firstName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Nome*</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Il tuo nome" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="lastName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Cognome*</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Il tuo cognome" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="profession"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Qualifica</FormLabel>
                                  <FormControl>
                                    <Input placeholder="La tua qualifica professionale" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email*</FormLabel>
                                  <FormControl>
                                    <Input placeholder="La tua email" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Messaggio*</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Scrivi qui il tuo messaggio..." 
                                    className="min-h-[120px]" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="acceptPrivacy"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                  <FormLabel>
                                    Accetto l'informativa sulla privacy*
                                  </FormLabel>
                                  <FormDescription>
                                    Dichiaro di aver letto l'informativa sulla privacy e acconsento al trattamento dei miei dati personali.
                                  </FormDescription>
                                </div>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <Button type="submit" className="w-full md:w-auto bg-black hover:bg-gray-800 text-white">
                            INVIA MESSAGGIO
                          </Button>
                        </form>
                      </Form>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Interest Section */}
      <InterestSection />
    </div>
  );
};

export default Contact;
