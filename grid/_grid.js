import React, {Component} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"



export class Grid extends Component {
    static propTypes = {
        type: PropTypes.oneOf(["grid", "subgrid", "inline-grid"]),
        gridGap: PropTypes.string,
        height: PropTypes.string,
        columns: PropTypes.string,
        alignItems: PropTypes.string,

    }

    static defaultProps = {
        type: "grid",
        gridGap: "0px",
        height: "auto",
        columns: "auto auto auto auto",
        alignItems: "center"
    }

    render(){
        const {type, gridGap, height, columns, alignItems} = this.props
        
        const GridContainer = styled.div`
            display: ${type};
            grid-gap: ${gridGap};
            height: ${height};
            grid-template-columns: ${columns};
            align-items: ${alignItems}
        `

        return(
            <GridContainer>
                {this.props.children}
            </GridContainer>
        )

    }

}