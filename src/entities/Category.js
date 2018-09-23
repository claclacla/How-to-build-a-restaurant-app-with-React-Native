import IEntity from "./IEntity";

class Category extends IEntity {
  constructor({ uid, name }) {
    super();

    if (uid === undefined) {
      throw new Error("uid is a required parameter")
    }

    if (name === undefined) {
      throw new Error("name is a required parameter")
    }

    this.uid = uid;
    this.name = name;
  }
}

export default Category;