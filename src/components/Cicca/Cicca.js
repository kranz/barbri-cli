import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Grid, Image, Segment } from 'semantic-ui-react'

export default class Cicca extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Image src='paragraph.png' />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Image src='paragraph.png' />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Image src='paragraph.png' />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Image src='paragraph.png' />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Image src='paragraph.png' />
          </Grid.Column>
        </Grid>

        <Grid>
          <Grid.Column largeScreen={2} widescreen={1}>
            <Image src='paragraph.png' />
          </Grid.Column>
          <Grid.Column largeScreen={2} widescreen={1}>
            <Image src='paragraph.png' />
          </Grid.Column>
          <Grid.Column largeScreen={2} widescreen={1}>
            <Image src='paragraph.png' />
          </Grid.Column>
          <Grid.Column largeScreen={2} widescreen={1}>
            <Image src='paragraph.png' />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
