import MenuList from "./menu-list"






export default function TreeView({menus = []} ) {
    console.log(menus);

    return (
        <div className="tree-view-container">
            <MenuList list = {menus}/>
        </div>
    );
}