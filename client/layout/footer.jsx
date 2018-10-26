import '../assets/styles/footer.styl'

export default {
  data () {
    return {
      author: 'c9cu'
    }
  },
  render () {
    return (
      <div id='footer'>
        <span>Writtern by {this.author}</span>
      </div>
    )
  }
}
