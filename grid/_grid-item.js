import React, {Component} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"



export class GridItem extends Component {
    static propTypes = {
        startingRow: PropTypes.string,
        endingRow: PropTypes.string,
        spanRow: PropTypes.bool,
        startingColumn: PropTypes.string,
        endingColumn: PropTypes.string,
        spanColumn: PropTypes.bool,
        justify: PropTypes.string, 
        align: PropTypes.string,

    }

    static defaultProps = {
        startingRow: "auto",
        endingRow: "auto",
        spanRow: false,
        startingColumn: "auto",
        endingColumn: "auto",
        spanColumn: false,
        justifySelf: "auto",
        alignSelf: "auto"
    }


    grid_columns = () => {
        const {startingColumn, endingColumn, spanColumn } = this.props
        return spanColumn ? `${startingColumn} / span ${endingColumn}` : `${startingColumn} / ${endingColumn}`
    }

    grid_row = () => {
        const {startingRow, endingRow, spanRow} = this.props
        return spanRow ? `${startingRow} / span ${endingRow}`: `${startingRow} / ${endingRow}` 
    }

    render(){
        const {type, gridGap, height, justify, align} = this.props
        const columns = this.grid_columns()
        const rows = this.grid_row()

        const GridItemContainer = styled.div`
            grid-column: ${columns};
            grid-row: ${rows};
            justify-self: ${justify};
            align-self: ${align};
        `

        return(
            <GridItemContainer>
                {this.props.children}
            </GridItemContainer>
        )

    }

}