import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import CreatePresetScreen from "./screens/CreatePresetScreen";
import DisplaySettings from "./screens/DisplaySettings";
import ElectrosurgeryScreen from "./screens/ElectrosurgeryScreen";
import MenuScreen from "./screens/MenuScreen";
import PresetsScreen from "./screens/PresetsScreen";
import ModifiedResetter from "./components/ModifiedResetter";
import WelcomeScreen from "./screens/WelcomeScreen";
import DataLoggingScreen from "./screens/DataLoggingScreen";
import GeneratorSettingsScreen from "./screens/GeneratorSettingsScreen";
import StatusScreen from "./screens/StatusScreen";
import RemoteServiceScreen from "./screens/RemoteServiceScreen";
import HelpScreen from "./screens/HelpScreen";
import VersionComponent from "./components/VersionComponent";

function App() {
	return (
		<RecoilRoot>
			<ModifiedResetter>
				<VersionComponent>
					<WelcomeScreen>
						<BrowserRouter>
							<Routes>
								<Route
									path="*"
									element={
										<ElectrosurgeryScreen></ElectrosurgeryScreen>
									}
								/>
								<Route
									path="/allpresets"
									element={<PresetsScreen></PresetsScreen>}
								/>
								<Route
									path="/createpreset"
									element={
										<CreatePresetScreen></CreatePresetScreen>
									}
								/>
								<Route
									path="/menu"
									element={<MenuScreen></MenuScreen>}
								/>
								<Route
									path="/displaysettings"
									element={
										<DisplaySettings></DisplaySettings>
									}
								/>
								<Route
									path="/datalogging"
									element={
										<DataLoggingScreen></DataLoggingScreen>
									}
								/>
								<Route
									path="/generatorsettings"
									element={
										<GeneratorSettingsScreen></GeneratorSettingsScreen>
									}
								/>
								<Route
									path="/status"
									element={<StatusScreen></StatusScreen>}
								/>
								<Route
									path="/remoteservice"
									element={
										<RemoteServiceScreen></RemoteServiceScreen>
									}
								/>
								<Route
									path="/help"
									element={<HelpScreen></HelpScreen>}
								/>
							</Routes>
						</BrowserRouter>
					</WelcomeScreen>
				</VersionComponent>
			</ModifiedResetter>
		</RecoilRoot>
	);
}

export default App;
