import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import ComingSoon from './containers/ComingSoon'
import Dashboard from './containers/Dashboard'
import Login from './containers/Login'
import NoMatch from './containers/NoMatch'
import Root from './containers/Root'
import SignUp from './containers/SignUp'
import store from './store/configStore'

createRoot(document.getElementById('application')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<Root />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Navigate to='/' replace />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/landing' element={<ComingSoon />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)
