import Geschiedenis from "@/secties/Geschiedenis";
import Header from "@/secties/Header";
import Interactief from "@/secties/Interactief";
import Lettergrootte from "@/secties/Lettergrootte";
import Letters from "@/secties/Letters";
import LetterVerschil from "@/secties/LetterVerschil";
import MeerInfo from "@/secties/MeerInfo";
import MemorySpel from "@/secties/MemorySpel";

export default function Home() {
	return (
		<>
			<Header />
			<Geschiedenis />
			<Letters />
			<Interactief />
			<MeerInfo />
			<Lettergrootte />
			<LetterVerschil />
			<MemorySpel />
		</>
	);
}
