import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import Login from './page/Login';
import SignUp from './page/SignUp';
import MonthlyPick from './page/MonthlyPick';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
					<Route path="/monthlyPick" element={<MonthlyPick />}></Route>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;