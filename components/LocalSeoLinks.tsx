import Link from "next/link";

const links = [
  ["Mediterranean Restaurant Alpharetta", "/mediterranean-restaurant-alpharetta"],
  ["Italian Restaurant Alpharetta", "/italian-restaurant-alpharetta"],
  ["Best Restaurants Alpharetta", "/best-restaurants-alpharetta"],
  ["New Restaurants Alpharetta", "/new-restaurants-alpharetta"],
  ["Downtown Alpharetta Restaurants", "/downtown-alpharetta-restaurants"],
  ["Tapas Restaurant Alpharetta", "/tapas-restaurant-alpharetta"],
  ["Fine Dining Alpharetta", "/fine-dining-restaurant-alpharetta"],
  ["Holiday Parties Alpharetta", "/holiday-parties-alpharetta"],
  ["Cocktail Bar Alpharetta", "/cocktail-bar-alpharetta"],
  ["Near Ameris Bank Amphitheatre", "/restaurants-near-ameris-bank-amphitheatre"],
  ["Dinner in Alpharetta", "/dinner-alpharetta"],
  ["Vegetarian Alpharetta", "/vegetarian-restaurant-alpharetta"],
  ["Date Night Alpharetta", "/date-night-alpharetta"],
  ["Private Dining Alpharetta", "/private-dining-alpharetta"],
  ["Birthday Dinner Alpharetta", "/birthday-dinner-alpharetta"],
  ["Brunch Alpharetta", "/brunch-alpharetta"],
  ["Happy Hour Alpharetta", "/happy-hour-alpharetta"],
  ["Mediterranean Restaurant Near Roswell", "/mediterranean-restaurant-near-roswell-ga"],
] as const;

export default function LocalSeoLinks() {
  return (
    <nav aria-label="Explore Siena dining experiences" className="bg-[#152c29] border-t border-[#e0b265]/20 px-5 py-10">
      <div className="max-w-[1180px] mx-auto">
        <p className="text-[#e0b265] text-sm uppercase tracking-[0.24em] text-center mb-5">Explore Siena</p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-white/80 hover:text-[#e0b265] transition text-sm md:text-[15px] underline-offset-4 hover:underline">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
