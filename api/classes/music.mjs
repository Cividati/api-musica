import { database } from './database.mjs'

export class Music {
    constructor(query){
        try {
        query.name == undefined ? this.name = 'undefined' : this.name = query.name 
        query.author == undefined ? this.author = 'undefined' : this.author = query.author 
        query.duration == undefined ? this.duration = 'undefined' : this.duration = query.duration 
        query.year == undefined ? this.year = 'undefined' : this.year = query.year 
        this.class_name = 'music'

        }
        catch (e){
            return false
        }
    }

    async create(){   
    
        let obj = JSON.parse(JSON.stringify(this))
        return await new database().create(this.class_name, this.name, obj)
    }
    
    async read(){
        let _music = await new database().read(this.class_name, this.name)
        console.log('music:', _music)
    }
    
    async update(){
        let obj = {}
        obj.name = this.name
        if (this.author != 'undefined')
            obj.author = parseFloat(this.author)
        if (this.duration != 'undefined')
            obj.duration = parseFloat(this.duration)
        if (this.year != 'undefined')
            obj.year = parseFloat(this.year)

        return await new database().update(this.class_name, this.name, obj)
    }

    async delete(){
        return await new database().delete(this.class_name, this.name)
    }
}    