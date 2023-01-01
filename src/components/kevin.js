class Day extends Component { //I am working on this part in Day.js
    state = {
        time: 0,
        wattage: 0,
    }

    time = (e) => {
        this.setState({
            time: Number(e.target.value)
        })
    }

    watt = (e) => {
        this.setState({
            wattage: Number(e.target.value)
        })
    }

    calculation = (watts, hours) => {
        let kwh = watts * hours
        let consumption = kwh * 0.264
        return consumption
    }


}