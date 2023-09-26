import { categories } from "~/fake-api"
import MenuItem from "../menu/item"


export default function Categories(){

    console.log(categories)

    const filteredCategories = categories.reduce((acc, curr ) => [...acc ,{
        path: `/${curr.slug}`,
        title : curr.title
    }], [])

    return(
        <section className="pt-5 mt-5  border-t">
        <div>
           {filteredCategories.map((category , key) => <MenuItem item={category} key={key} />)}
        </div>
        </section>
    )
}