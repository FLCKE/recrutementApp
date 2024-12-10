import { Data } from "@/app/utilities/data";
export default function Page({ params }) {
    return <div>My Post: {Data[params.id].personalInformation.desc}</div>
}