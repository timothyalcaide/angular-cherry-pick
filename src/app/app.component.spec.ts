import { createComponentFactory, Spectator } from '@ngneat/spectator/jest'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  const createComponent = createComponentFactory({
    component: AppComponent,
  })

  let spectator: Spectator<AppComponent>
  beforeEach(() => (spectator = createComponent()))

  it('should create the app', () => {
    const app = spectator.component
    expect(app).toBeTruthy()
  })

  it(`should have as title 'angular-cherry-pick'`, () => {
    const app = spectator.component
    expect(app.title).toEqual('angular-cherry-pick')
  })

  it('should render title', () => {
    const fixture = spectator.fixture
    fixture.detectChanges()
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('.content span').textContent).toContain(
      'angular-cherry-pick app is running!'
    )
  })
})
