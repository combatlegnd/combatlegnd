local Library = {
	Open = true;
	Accent = Color3.fromHex("6759b3");
	DarkerAccent = nil;
	FontColor = Color3.fromHex("ffffff");
	OutlineColor = Color3.fromHex("323232");	
	MainColor = Color3.fromHex("191925");
	BackgroundColor = Color3.fromHex("16161f");
	Pages = {};
	Sections = {};
	Flags = {};
	UnNamedFlags = 0;
	ThemeObjects = {};
	Instances = {};
	Holder = nil;
	PageHolder = nil;
	RegistryMap = {};
	Toggles = {};
	ScreenGui = nil;
	Keys = {
		[Enum.KeyCode.LeftShift] = "LShift",
		[Enum.KeyCode.RightShift] = "RShift",
		[Enum.KeyCode.LeftControl] = "LCtrl",
		[Enum.KeyCode.RightControl] = "RCtrl",
		[Enum.KeyCode.LeftAlt] = "LAlt",
		[Enum.KeyCode.RightAlt] = "RAlt",
		[Enum.KeyCode.CapsLock] = "Caps",
		[Enum.KeyCode.One] = "1",
		[Enum.KeyCode.Two] = "2",
		[Enum.KeyCode.Three] = "3",
		[Enum.KeyCode.Four] = "4",
		[Enum.KeyCode.Five] = "5",
		[Enum.KeyCode.Six] = "6",
		[Enum.KeyCode.Seven] = "7",
		[Enum.KeyCode.Eight] = "8",
		[Enum.KeyCode.Nine] = "9",
		[Enum.KeyCode.Zero] = "0",
		[Enum.KeyCode.KeypadOne] = "Num1",
		[Enum.KeyCode.KeypadTwo] = "Num2",
		[Enum.KeyCode.KeypadThree] = "Num3",
		[Enum.KeyCode.KeypadFour] = "Num4",
		[Enum.KeyCode.KeypadFive] = "Num5",
		[Enum.KeyCode.KeypadSix] = "Num6",
		[Enum.KeyCode.KeypadSeven] = "Num7",
		[Enum.KeyCode.KeypadEight] = "Num8",
		[Enum.KeyCode.KeypadNine] = "Num9",
		[Enum.KeyCode.KeypadZero] = "Num0",
		[Enum.KeyCode.Minus] = "-",
		[Enum.KeyCode.Equals] = "=",
		[Enum.KeyCode.Tilde] = "~",
		[Enum.KeyCode.LeftBracket] = "[",
		[Enum.KeyCode.RightBracket] = "]",
		[Enum.KeyCode.RightParenthesis] = ")",
		[Enum.KeyCode.LeftParenthesis] = "(",
		[Enum.KeyCode.Semicolon] = ",",
		[Enum.KeyCode.Quote] = "'",
		[Enum.KeyCode.BackSlash] = "\\",
		[Enum.KeyCode.Comma] = ",",
		[Enum.KeyCode.Period] = ".",
		[Enum.KeyCode.Slash] = "/",
		[Enum.KeyCode.Asterisk] = "*",
		[Enum.KeyCode.Plus] = "+",
		[Enum.KeyCode.Period] = ".",
		[Enum.KeyCode.Backquote] = "`",
		[Enum.UserInputType.MouseButton1] = "MB1",
		[Enum.UserInputType.MouseButton2] = "MB2",
		[Enum.UserInputType.MouseButton3] = "MB3"
	};
	Connections = {};
	HookedFunctions = {};
	ChangedUpValues = {};
	Font = nil;
	FontSize = 12;
	Notifs = {};
	KeyList = nil;
	ScreenGUI = nil;
	Window = nil;
	Folder = "pastalua/"
}
local Workspace = game:GetService("Workspace")
local Players = game:GetService("Players");
local userinput = game:GetService("UserInputService");
local tweenserv = game:GetService("TweenService")
local runserv = game:GetService("RunService")
local httpserv = game:GetService("HttpService")
local Flags = {}; 
local LocalPlayer = Players.LocalPlayer;
local Mouse = LocalPlayer:GetMouse();
local Camera = Workspace:FindFirstChildOfClass("Camera");
local viewportSize = Camera.ViewportSize;
local ProtectGui = protectgui or protect_gui or (function()
end);
local NewVector2 = Vector2.new;
Library.__index = Library;
Library.Pages.__index = Library.Pages;
Library.Sections.__index = Library.Sections;

if not isfolder(Library.Folder) then
	makefolder(Library.Folder)
end
if not isfile(Library.Folder .. "hue.jpg") then
	writefile(Library.Folder .. "hue.jpg", game:HttpGet("https://raw.githubusercontent.com/s0opdev/pasta/main/hue.png?raw=true"))
end
if not isfile(Library.Folder .. "sat.jpg") then
	writefile(Library.Folder .. "sat.jpg", game:HttpGet("https://raw.githubusercontent.com/s0opdev/pasta/main/sat.png?raw=true"))
end
if not isfile(Library.Folder .. "val.jpg") then
	writefile(Library.Folder .. "val.jpg", game:HttpGet("https://raw.githubusercontent.com/s0opdev/pasta/main/val.png?raw=true"))
end
if not isfile(Library.Folder .. "highlight.jpg") then
	writefile(Library.Folder .. "highlight.jpg", game:HttpGet("https://raw.githubusercontent.com/s0opdev/pasta/main/highlight.png?raw=true"))
end
if not isfile(Library.Folder .. "alpha.jpg") then
	writefile(Library.Folder .. "alpha.jpg", game:HttpGet("https://raw.githubusercontent.com/s0opdev/pasta/main/alpha.png?raw=true"))
end
writefile(Library.Folder .. "ProggyClean.ttf", game:HttpGet("https://raw.githubusercontent.com/s0opdev/pasta/main/ProggyClean.ttf?raw=true"))

local Data = {
	name = "ProggyClean",
	faces = {
		{
			name = "Regular",
			weight = 200,
			style = "normal",
			assetId = getcustomasset(Library.Folder .. "ProggyClean.ttf"),
		},
	},
}
writefile(Library.Folder .. "ProggyClean.font", httpserv:JSONEncode(Data))

Library.Font = Font.new(getcustomasset(Library.Folder .. "ProggyClean.font"))
-- // Functions
function Library:GetDarkerColor(Color)
	local H, S, V = Color:ToHSV()
	return Color3.fromHSV(H, S, V / 1.25)
end
Library.DarkerAccent = Library:GetDarkerColor(Library.Accent)
function Library:TweenProperty(object, property, endValue, duration)
	local tween
	pcall(function()
		if typeof(object) == "Instance" then
			local tweenInfo = TweenInfo.new(
				duration,
				Enum.EasingStyle.Linear,
				Enum.EasingDirection.Out
			)
			tween = tweenserv:Create(object, tweenInfo, {
				[property] = endValue
			})
			tween:Play()
		end
	end)
	return tween
end
function Library:Create(Class, Properties, Secure)
	local instance = Instance.new(Class)
	
	if Secure then
		ProtectGui(instance)
	end
	
	local colorMapping = {
		FontColor = Library.FontColor,
		Accent = Library.Accent,
		DarkerAccent = Library.DarkerAccent,
		OutlineColor = Library.OutlineColor,
		MainColor = Library.MainColor,
		BackgroundColor = Library.BackgroundColor
	}
	
	local themeProperties = {}
	
	for Property, Value in pairs(Properties) do
		local resolvedValue = Value
		
		if typeof(Value) == "string" and colorMapping[Value] then
			resolvedValue = colorMapping[Value]
			themeProperties[Property] = Value
		end
		
		instance[Property] = resolvedValue
	end
	
	if next(themeProperties) then
		Library:AddToThemeObjects(instance, themeProperties)
	end
	
	return instance
end

function Library:Connection(Signal, Callback)
	local Con = Signal:Connect(Callback)
	table.insert(Library.Connections, Con)
	return Con
end

function Library:HookFunction(OldFunction, NewFunction)
	if isfunctionhooked(OldFunction) then
		restorefunction(OldFunction)
	end
	local Hook = hookfunction(OldFunction, NewFunction)
	table.insert(Library.HookedFunctions, OldFunction)
	return Hook
end

function Library:RestoreFunction(Function)
	if isfunctionhooked(Function) then
		restorefunction(Function)
	end
	if table.find(Library.HookedFunctions, Function) then
		table.remove(Library.HookedFunctions, table.find(Library.HookedFunctions, Function))
	end
end

function Library:SetUpValue(UpValueFunction, UpValueNumber, NewUpValue)
	local UpValue = getupvalue(UpValueFunction, UpValueNumber)
	setupvalue(UpValueFunction, UpValueNumber, NewUpValue)
	Library.ChangedUpValues[UpValueFunction] = {UpValueNumber, UpValue}
	return UpValue
end

function Library:RestoreUpValue(UpValueFunction, UpValue)
	for UpValueFunc, Table in Library.ChangedUpValues do
		if UpValueFunc == UpValueFunction and Table[1] == UpValue then
			setupvalue(UpValueFunction, Table[1], Table[2])
			UpValueFunc = nil
			break
		end
	end
	if not table.find(Library.HookedFunctions, UpValueFunction) then
		restorefunction(UpValueFunction)
	end
end

function Library:Unload()
	Library:SetOpen()
	Library.KeyList:SetVisible(false)
	task.wait(0.2)
	for _, v in ipairs(Library.Connections) do
		v:Disconnect()
	end
	for UpValueFunc, Table in Library.ChangedUpValues do
		setupvalue(UpValueFunc, Table[1], Table[2])
		restorefunction(UpValueFunc)
	end
	for _, v in next, Library.HookedFunctions do
		if isfunctionhooked(v) then
			restorefunction(v)
		end
	end
	task.wait()
	for i, _ in pairs(Flags) do
		local toggle = Library.Toggles[i]
		if toggle then
			toggle:Set(false)
		end
	end
	task.wait()
	self.ScreenGui:Destroy()
	self.Connections = {}
	self = nil
end
--
function Library:AddToThemeObjects(Instance, Properties)
	local Data = {
		Instance = Instance,
		Properties = Properties,
		Idx = #Library.ThemeObjects + 1
	}
	table.insert(Library.ThemeObjects, Data)
	Library.RegistryMap[Instance] = Data
end

function Library:RemoveFromThemeObjects(Instance)
	local Data = Library.RegistryMap[Instance];
	for Idx = #Library.ThemeObjects, 1, -1 do
		if Library.ThemeObjects[Idx] == Data then
			table.remove(Library.ThemeObjects, Idx);
		end;
	end;
	Library.RegistryMap[Instance] = nil;
end;
--
function Library:Notification(message, duration, color, position)
	if typeof(message) == "string" then
		local notification = {
			Container = nil,
			Objects = {}
		}
		local NotifContainer = Library:Create("Frame", {
			Parent = Library.ScreenGui,
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			ZIndex = 99999999,
		})
		local Background = Library:Create("Frame", {
			Parent = NotifContainer,
			Size = UDim2.new(1, 0, 1, 0),
			BackgroundColor3 = Color3.new(0.0588, 0.0588, 0.0784),
			BorderColor3 = Color3.new(0.1373, 0.1373, 0.1569)
		})
		local Outline = Library:Create('Frame', {
			Parent = Background,
			Position = UDim2.new(0, -1, 0, -1),
			Size = UDim2.new(1, 2, 1, 2),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
		})
		local UIStroke = Library:Create('UIStroke', {
			Parent = Outline
		})
		local TextLabel = Library:Create('TextLabel', {
			Parent = Background,
			Position = UDim2.new(0, 1, 0, 0),
			Size = UDim2.new(1, 0, 1, 0),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			Text = message,
			TextColor3 = Color3.new(0.9216, 0.9216, 0.9216),
			FontFace = Library.Font,
			TextSize = Library.FontSize,
			AutomaticSize = Enum.AutomaticSize.X,
			TextXAlignment = Enum.TextXAlignment.Left,
		})
		local Accemt = Library:Create('Frame', {
			Parent = Background,
			Size = UDim2.new(1, 0, 0, 2),
			BackgroundColor3 = "Accent",
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
		})
		local Progress = Library:Create('Frame', {
			Parent = Background,
			Position = UDim2.new(0, 0, 1, -1),
			Size = UDim2.new(0, 0, 0, 1),
			BackgroundColor3 = Color3.new(1, 0, 0),
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
		})
		--
		local Position = position == "Middle" and NewVector2(viewportSize.X / 2 - (TextLabel.TextBounds.X + 4) / 2, 600) or NewVector2(20, 20)
		--
		NotifContainer.Position = UDim2.new(0, Position.X, 0, Position.Y)
		NotifContainer.Size = UDim2.new(0, TextLabel.TextBounds.X + 4, 0, 20)
		notification.Container = NotifContainer
		table.insert(notification.Objects, Background)
		table.insert(notification.Objects, Outline)
		table.insert(notification.Objects, TextLabel)
		table.insert(notification.Objects, Accemt)
		table.insert(notification.Objects, Progress)
		if color ~= nil then
			Progress.BackgroundColor3 = color
			Accemt.BackgroundColor3 = color
		end
		task.spawn(function()
			Background.AnchorPoint = NewVector2(1, 0)
			tweenserv:Create(Background, TweenInfo.new(0.25, Enum.EasingStyle.Quad, Enum.EasingDirection.Out), {
				AnchorPoint = NewVector2(0, 0)
			}):Play()
			tweenserv:Create(Progress, TweenInfo.new(duration or 5, Enum.EasingStyle.Linear, Enum.EasingDirection.Out), {
				Size = UDim2.new(1, 0, 0, 2)
			}):Play()
			task.wait(duration)
			tweenserv:Create(Background, TweenInfo.new(0.25, Enum.EasingStyle.Quad, Enum.EasingDirection.Out), {
				AnchorPoint = NewVector2(1, 0)
			}):Play()
			for _, v in next, notification.Objects do
				tweenserv:Create(v, TweenInfo.new(0.25, Enum.EasingStyle.Quad, Enum.EasingDirection.Out), {
					BackgroundTransparency = 1
				}):Play()
			end
			tweenserv:Create(TextLabel, TweenInfo.new(0.25, Enum.EasingStyle.Quad, Enum.EasingDirection.Out), {
				TextTransparency = 1
			}):Play()
			tweenserv:Create(UIStroke, TweenInfo.new(0.25, Enum.EasingStyle.Quad, Enum.EasingDirection.Out), {
				Transparency = 1
			}):Play()
		end)
		task.delay(0.25 + duration + 0.25, function()
			table.remove(Library.Notifs, table.find(Library.Notifs, notification))
			notification.Container:Destroy()
		end)
		table.insert(Library.Notifs, notification)
		NotifContainer.Position = UDim2.new(0, Position.X, 0, Position.Y + ((table.find(Library.Notifs, notification) or 0) * 25))
		NotifContainer.Size = UDim2.new(0, TextLabel.TextBounds.X + 4, 0, 18)
		for i, v in pairs(Library.Notifs) do
			local Position1 = position == "Middle" and NewVector2(viewportSize.X / 2 - (v["Objects"][3].TextBounds.X + 4) / 2, 600) or NewVector2(20, 20)
			tweenserv:Create(v.Container, TweenInfo.new(0.25, Enum.EasingStyle.Quad, Enum.EasingDirection.Out), {
				Position = UDim2.new(0, Position1.X, 0, Position1.Y + (i * 25))
			}):Play()
		end
		return notification
	end
	return nil
end
--
function Library:Disconnect(Connection)
	Connection:Disconnect()
end
--
function Library.NextFlag()
	Library.UnNamedFlags = Library.UnNamedFlags + 1
	return string.format("%.14g", Library.UnNamedFlags)
end
--
function Library:GetConfig()
	local Config = ""
	for Index, Value in pairs(self.Flags) do
		if Index ~= "SettingsConfigurationName" and Index ~= "SettingConfigurationList" and Index ~= "MenuKey" then
			local Value2 = Value
			local Final = ""
			--
			if typeof(Value2) == "Color3" then
				local hue, sat, val = Value2:ToHSV()
				--
				Final = ("rgb(%s,%s,%s)"):format(hue, sat, val)
			elseif typeof(Value2) == "table" and Value2.Color then
				local hue, sat, val = Value2.Color:ToHSV()
				--
				Final = ("rgb(%s,%s,%s)"):format(hue, sat, val)
			elseif Value2 ~= nil then
				if typeof(Value2) == "boolean" then
					Value2 = ("bool(%s)"):format(tostring(Value2))
				elseif typeof(Value2) == "table" then
					local New = "table("
					--
					for _, Value3 in pairs(Value2) do
						New = New .. Value3 .. ","
					end
					--
					if New:sub(#New) == "," then
						New = New:sub(0, #New - 1)
					end
					--
					Value2 = New .. ")"
				elseif typeof(Value2) == "string" then
					Value2 = ("string(%s)"):format(Value2)
				elseif typeof(Value2) == "number" then
					Value2 = ("number(%s)"):format(tostring(Value2))
				end
				--
				Final = Value2
			end
			--
			Config = Config .. Index .. ": " .. tostring(Final) .. "\n"
		end
	end
	--
	return Config
end
--
function Library:LoadConfig(Config)
	for _ = 1, 10 do
		local Table = string.split(Config, "\n")
		local Table2 = {}
		for _, Value1 in pairs(Table) do
			local Table3 = string.split(Value1, ":")
			--
			if Table3[1] ~= "ConfigConfig_List" and #Table3 >= 2 then
				local Value = Table3[2]:sub(2, #Table3[2])
				--
				if Value:sub(1, 3) == "rgb" then
					local Table4 = string.split(Value:sub(5, #Value - 1), ",")
					--
					Value = Table4
				elseif Value:sub(1, 3) == "key" then
					local Table4 = string.split(Value:sub(5, #Value - 1), ",")
					--
					if Table4[1] == "nil" and Table4[2] == "nil" then
						Table4[1] = nil
						Table4[2] = nil
					end
					--
					Value = Table4
				elseif Value:sub(1, 4) == "bool" then
					local Bool = Value:sub(6, #Value - 1)
					--
					Value = Bool == "true"
				elseif Value:sub(1, 5) == "table" then
					local Table4 = string.split(Value:sub(7, #Value - 1), ",")
					--
					Value = Table4
				elseif Value:sub(1, 6) == "string" then
					local String = Value:sub(8, #Value - 1)
					--
					Value = String
				elseif Value:sub(1, 6) == "number" then
					local Number = tonumber(Value:sub(8, #Value - 1))
					--
					Value = Number
				end
				--
				Table2[Table3[1]] = Value
			end
		end 
		--
		for index, v in pairs(Table2) do
			if Flags[index] then
				if index ~= "SettingsConfigurationName" and index ~= "SettingConfigurationList" and index ~= "MenuKey" then
					if typeof(Flags[index]) == "table" then
						Flags[index]:Set(v)
					else
						Flags[index](v)
					end
				end
			end
		end
	end
end
--
local ManagementCache = {}
function Library:ManageTransparency(Object, TableName, FadeTime, State)
	if not ManagementCache[TableName] then
		ManagementCache[TableName] = {}
	end
	
	local TransparencyCache = ManagementCache[TableName]
	if Object:IsA('ImageLabel') or Object:IsA('ImageButton') then
		TransparencyCache[Object] = {
			ImageTransparency = Object.ImageTransparency,
			BackgroundTransparency = Object.BackgroundTransparency
		}
	elseif Object:IsA('TextLabel') or Object:IsA('TextBox') or Object:IsA('TextButton') then
		TransparencyCache[Object] = {
			TextTransparency = Object.TextTransparency,
			TextStrokeTransparency = Object.TextStrokeTransparency,
			BackgroundTransparency = Object.BackgroundTransparency
		}
	elseif Object:IsA('Frame') or Object:IsA('ScrollingFrame') then
		TransparencyCache[Object] = {
			BackgroundTransparency = Object.BackgroundTransparency
		}
	end
	if Object:IsA("GuiObject") then
		TransparencyCache[Object].Transparency = Object.Transparency
	end
	for _, Desc in ipairs(Object:GetDescendants()) do
		if not TransparencyCache[Desc] then
			TransparencyCache[Desc] = {}

			if Desc:IsA('ImageLabel') or Desc:IsA('ImageButton') then
				TransparencyCache[Desc] = {
					ImageTransparency = Desc.ImageTransparency,
					BackgroundTransparency = Desc.BackgroundTransparency
				}
			elseif Desc:IsA('TextLabel') or Desc:IsA('TextBox') or Desc:IsA('TextButton') then
				TransparencyCache[Desc] = {
					TextTransparency = Desc.TextTransparency,
					TextStrokeTransparency = Desc.TextStrokeTransparency,
					BackgroundTransparency = Desc.BackgroundTransparency
				}
			elseif Desc:IsA('Frame') or Desc:IsA('ScrollingFrame') then
				TransparencyCache[Desc] = {
					BackgroundTransparency = Desc.BackgroundTransparency
				}
			end
			if Desc:IsA("GuiObject") then
				TransparencyCache[Desc].Transparency = Desc.Transparency
			end
		end
		if State then
			Library:TweenProperty(Desc, "Transparency", 1, FadeTime)
			task.delay(FadeTime, function()
				Object.Visible = false
			end)
		else
			Object.Visible = true
			for Prop, OriginalValue in pairs(TransparencyCache[Desc]) do
				Library:TweenProperty(Desc, Prop, OriginalValue, FadeTime)
			end
		end
	end
end

function Library:SetOpen()
	Library.Open = not Library.Open
	Library.Holder.Visible = Library.Open
end

--
function Library:ChangeAccent()
	for _, Object in next, Library.ThemeObjects do
		for Property, ColorIdx in next, Object.Properties do
			if type(ColorIdx) == 'string' then
				if Object.Instance and Object.Instance:IsA("GuiObject") then
					Library:TweenProperty(Object.Instance, Property, Library[ColorIdx], 0.2)
				else
					Object.Instance[Property] = Library[ColorIdx]
				end
			elseif type(ColorIdx) == 'function' then
				Object.Instance[Property] = ColorIdx()
			end
		end
	end
end
--
function Library:IsMouseOverFrame(Frame)
	local AbsPos, AbsSize = Frame.AbsolutePosition, Frame.AbsoluteSize;
	if Mouse.X >= AbsPos.X and Mouse.X <= AbsPos.X + AbsSize.X
		and Mouse.Y >= AbsPos.Y and Mouse.Y <= AbsPos.Y + AbsSize.Y then
		return true;
	end;
	return false
end;
function Library:KeybindList()
	local KeyList = {
		Keybinds = {}
	}
	local Dragging = {
		false,
		UDim2.new(0, 0, 0, 0)
	}
	Library.KeyList = KeyList
	local KeybindOuter = Library:Create('Frame', {
		AnchorPoint = Vector2.new(0, 0.5),
		BorderColor3 = Color3.new(0, 0, 0),
		Position = UDim2.new(0, 10, 0.5, 0),
		Size = UDim2.new(0, 50, 0, 20),
		Visible = false,
		Parent = Library.ScreenGui
	})
	local KeybindInner = Library:Create('Frame', {
		BackgroundColor3 = "MainColor",
		BorderColor3 = "OutlineColor",
		BorderMode = Enum.BorderMode.Inset,
		Size = UDim2.new(1, 0, 1, 0),
		Parent = KeybindOuter
	})
	Library:Create('Frame', {
		BackgroundColor3 = "Accent";
		BorderSizePixel = 0;
		Size = UDim2.new(1, 0, 0, 2);
		Parent = KeybindInner;
	});
	local KeybindLabel = Library:Create('TextButton', {
		Size = UDim2.new(1, 0, 0, 20),
		Position = UDim2.fromOffset(5, 2),
		TextXAlignment = Enum.TextXAlignment.Left,
		Text = 'Keybinds',
		BackgroundColor3 = "MainColor",
		BackgroundTransparency = 1,
		TextColor3 = "FontColor",
		FontFace = Library.Font,
		TextSize = 12.5,
		TextStrokeTransparency = 0,
		Parent = KeybindInner
	})

	local KeybindContainer = Library:Create('Frame', {
		BackgroundTransparency = 1,
		Size = UDim2.new(1, -10, 1, -30),
		Position = UDim2.new(0, 5, 0, 26),
		Parent = KeybindInner
	})
	Library:Create('UIListLayout', {
		FillDirection = Enum.FillDirection.Vertical,
		SortOrder = Enum.SortOrder.LayoutOrder,
		Parent = KeybindContainer
	})
	Library:Create('UIPadding', {
		PaddingLeft = UDim.new(0, -8),
		Parent = KeybindContainer
	})
	Library:Connection(KeybindLabel.MouseButton1Down, function()
		local Location = userinput:GetMouseLocation()
		Dragging[1] = true
		Dragging[2] = UDim2.new(0, Location.X - KeybindOuter.AbsolutePosition.X, 0, Location.Y - KeybindOuter.AbsolutePosition.Y)
	end)
	Library:Connection(userinput.InputEnded, function(Input)
		if Input.UserInputType == Enum.UserInputType.MouseButton1 and Dragging[1] then
			Dragging[1] = false
			Dragging[2] = UDim2.new(0, 0, 0, 0)
		end
	end)
	Library:Connection(userinput.InputChanged, function()
		if Dragging[1] then
			local Location = userinput:GetMouseLocation()
			KeybindOuter.Position = UDim2.new(
				0,
				Location.X - Dragging[2].X.Offset + (KeybindOuter.Size.X.Offset * KeybindOuter.AnchorPoint.X),
				0,
				Location.Y - Dragging[2].Y.Offset + (KeybindOuter.Size.Y.Offset * KeybindOuter.AnchorPoint.Y)
			)
		end
	end)

	local function UpdateSize()
		local YSize = 0
		local XSize = 0
	
		for _, Label in next, KeybindContainer:GetChildren() do
			if Label:IsA('TextLabel') and Label.Visible then
				YSize = YSize + 15;
				if (Label.TextBounds.X > XSize) then
					XSize = Label.TextBounds.X
				end
			end;
		end;

		KeybindOuter.Size = UDim2.new(0, math.max(XSize + 2.5, 210), 0, YSize + 32)
	end
	

	function KeyList:SetVisible(State)
		KeybindOuter.Visible = State
	end
	function KeyList:NewKey(Key, Name, Mode)
		if not Key or Key == "" then
			return
		end
		local KeyValue = {}
		local TextShit = Mode and tostring(" [" .. Key .. "] " .. Name .. " (" .. Mode .. ") ") or tostring(" [" .. Key .. "] " .. Name)
		local NewValue = Library:Create('TextLabel', {
			Parent = KeybindContainer,
			Size = UDim2.new(1, -10, 0, 15),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			Text = TextShit,
			TextColor3 = Color3.new(0.5686, 0.5686, 0.5686),
			FontFace = Library.Font,
			TextSize = 12,
			TextStrokeTransparency = 0,
			AutomaticSize = Enum.AutomaticSize.Y,
			TextXAlignment = Enum.TextXAlignment.Left,
			LayoutOrder = #KeybindContainer:GetChildren() + 1,
			Visible = false
		})
		function KeyValue:SetVisible(value)
			NewValue.Visible = value
			UpdateSize()
		end
		function KeyValue:Update(NewKey, NewName, NewMode)
			local NLECHOPPAWTF = NewMode and tostring(" [" .. NewKey .. "] " .. NewName .. " (" .. NewMode .. ") ") or tostring(" [" .. NewKey .. "] " .. NewName)
			NewValue.Text = NLECHOPPAWTF
			NewValue.Visible = true
			UpdateSize()
		end
		local iscolor = false
		function KeyValue:SetColorBlue(hi)
			if hi then
				iscolor = hi
			else
				iscolor = not iscolor
			end
			if iscolor then
				Library:TweenProperty(NewValue, "TextColor3", Library.Accent, 0.2)
				Library:AddToThemeObjects(NewValue, {
					TextColor3 = "Accent"
				})
			else
				Library:TweenProperty(NewValue, "TextColor3", Color3.new(0.5686, 0.5686, 0.5686), 0.2)
				Library:RemoveFromThemeObjects(NewValue)
			end
		end
		return KeyValue
	end
	return KeyList
end
--
function Library:LoadConfigTab(Window)
	local Config = Window:Page({
		Name = "Settings"
	})
	do
	    local PlayerUtility = Config:Section({
		    Name = "Teleport"
		})
		local Menu = Config:Section({
			Name = "Menu"
		})
		
		local PresetThemes = Config:Section({
			Name = "Preset Themes"
		})
		local Themes = Config:Section({
			Name = "Themes Configuration"
		})
		local Cfgs = Config:Section({
			Name = "Configs",
			Side = "Right"
		})
	    local editingsectah = Config:Section({
		    Name = "Control",
            Side = "Right"
		})
							
		local CurrentList = {}
		local CFGList, loadedcfgshit, autoloadlabel, randomfunc, maincolor, backgroundcolor, outlinecolor, fontcolor, accentcolor
		local function UpdateConfigList()
			local List = {}
			local SelectedConfig = Library.Flags["SettingConfigurationList"]
			for _, file in ipairs(listfiles(ConfigFolder .. "/configs")) do
				local FileName = file:gsub("\\", "/")
				FileName = FileName:match("([^/]+)$")
				List[#List + 1] = FileName
			end
			
			local IsNew = #List ~= #CurrentList
			if not IsNew then
				for idx, file in ipairs(List) do
					if file ~= CurrentList[idx] then
						IsNew = true
						break
					end
				end
			end
			if IsNew then
				CurrentList = List
				CFGList:Refresh(CurrentList)
			end
			if SelectedConfig then
				randomfunc:set("")
				CFGList:Set(SelectedConfig)
			end
		end
PresetThemes:Dropdown({
	Name = "Presets",
	Flag = "UI/Presets",
	Options = {
	    "CryptHub OF",
		"Tokyo Night",
		"Kanagawa",						
		"Quartz",
		"BBot",
		"Fatality",
		"Jester",
		"Mint",
		"Ubuntu",
		"Abyss",
		"Neverlose",
		"Aimware",
		"Youtube",
		"Gamesense",
		"Onetap",
		"Entropy",
		"Interwebz",
		"Dracula",
		"Spotify",
		"Sublime",
		"Vape",
		"Neko",
		"Corn",
		"Minecraft",
		"Nord",
		"Monokai",
		"Cyberpunk",
		"Solarized Dark",
		"Gruvbox",
		"Night Owl",
		"Arc Dark",
		"Catppuccin",
		"Tomorrow Night",
		"Molokai",
		"Material Palenight",
		"Oceanic Next",
		"Spacegray",
		"PaperColor Dark",
		"Edge",
		"One Dark",
		"Tokyo Dark",
		"DOS",
		"CRT Green",
		"Matrix",
		"Old Terminal",
		"Midnight Retro",
		"Neo Noir",
		"Dark Cherry",
		"Vintage Code",
		"Oblivion",
		"Nocturne",
		"Zerox",
		"Void",
		"Carbon",
		"Black Ice",
		"Terminal Wave"
	},
	State = 'CryptHub OF',
	Callback = function(v)
		local themes = {



											
					['Tokyo Night'] = {
			                        FontColor = "#FFFFFF",
			                        MainColor = "#191925",
			                        Accent = "#6759B3",
			                        BackgroundColor = "#16161F",
			                        OutlineColor = "#323232"
					},

                  ['CryptHub OF'] = {
						FontColor = "#ffffff",
						MainColor = "#2e2e2e",
						Accent = "#6a00ff",
						BackgroundColor = "#1c1c1c",
						OutlineColor = "#000000"
					},

											
					Kanagawa = {
						FontColor = "#dcd7ba",
						MainColor = "#1f1f28",
						Accent = "#957fb8",
						BackgroundColor = "#1a1a22",
						OutlineColor = "#000000"
					},						
					Quartz = {
						FontColor = "#ffffff",
						MainColor = "#2e2e2e",
						Accent = "#9147ff",
						BackgroundColor = "#1c1c1c",
						OutlineColor = "#000000"
					},

					BBot = {
						FontColor = "#ffffff",
						MainColor = "#2d2d2d",
						Accent = "#3a9bfd",
						BackgroundColor = "#1a1a1a",
						OutlineColor = "#000000"
					},
					Fatality = {
						FontColor = "#ffffff",
						MainColor = "#191919",
						Accent = "#e61c1c",
						BackgroundColor = "#0f0f0f",
						OutlineColor = "#000000"
					},
					Jester = {
						FontColor = "#ffffff",
						MainColor = "#292929",
						Accent = "#ff00ff",
						BackgroundColor = "#121212",
						OutlineColor = "#000000"
					},
					Mint = {
						FontColor = "#ffffff",
						MainColor = "#2a2a2a",
						Accent = "#78ffd6",
						BackgroundColor = "#1f1f1f",
						OutlineColor = "#000000"
					},
					Ubuntu = {
						FontColor = "#eeeeee",
						MainColor = "#2c001e",
						Accent = "#e95420",
						BackgroundColor = "#300a24",
						OutlineColor = "#000000"
					},
					Abyss = {
						FontColor = "#dcdcdc",
						MainColor = "#1c1c1c",
						Accent = "#5e81ac",
						BackgroundColor = "#101010",
						OutlineColor = "#000000"
					},
					Neverlose = {
						FontColor = "#f2f2f2",
						MainColor = "#1e1e1e",
						Accent = "#5fa8d3",
						BackgroundColor = "#121212",
						OutlineColor = "#000000"
					},
					Aimware = {
						FontColor = "#ffffff",
						MainColor = "#2d2d2d",
						Accent = "#e62e2e",
						BackgroundColor = "#1a1a1a",
						OutlineColor = "#000000"
					},
					Youtube = {
						FontColor = "#ffffff",
						MainColor = "#282828",
						Accent = "#ff0000",
						BackgroundColor = "#121212",
						OutlineColor = "#000000"
					},
					Gamesense = {
						FontColor = "#b4b4b4",
						MainColor = "#1a1a1a",
						Accent = "#5eb95e",
						BackgroundColor = "#101010",
						OutlineColor = "#000000"
					},
					Onetap = {
						FontColor = "#ffffff",
						MainColor = "#232323",
						Accent = "#2e8bff",
						BackgroundColor = "#141414",
						OutlineColor = "#000000"
					},
					Entropy = {
						FontColor = "#e0e0e0",
						MainColor = "#2a2a2a",
						Accent = "#b16286",
						BackgroundColor = "#1a1a1a",
						OutlineColor = "#000000"
					},
					Interwebz = {
						FontColor = "#ffffff",
						MainColor = "#292929",
						Accent = "#e600ff",
						BackgroundColor = "#121212",
						OutlineColor = "#000000"
					},
					Dracula = {
						FontColor = "#f8f8f2",
						MainColor = "#282a36",
						Accent = "#bd93f9",
						BackgroundColor = "#1e1f29",
						OutlineColor = "#000000"
					},
					Spotify = {
						FontColor = "#ffffff",
						MainColor = "#191414",
						Accent = "#1db954",
						BackgroundColor = "#121212",
						OutlineColor = "#000000"
					},
					Sublime = {
						FontColor = "#f8f8f2",
						MainColor = "#2b2b2b",
						Accent = "#66d9ef",
						BackgroundColor = "#1e1e1e",
						OutlineColor = "#000000"
					},
					Vape = {
						FontColor = "#ffffff",
						MainColor = "#1f1f1f",
						Accent = "#8c52ff",
						BackgroundColor = "#121212",
						OutlineColor = "#000000"
					},
					Neko = {
						FontColor = "#ffffff",
						MainColor = "#2d2a55",
						Accent = "#ff77a8",
						BackgroundColor = "#1b1b3a",
						OutlineColor = "#000000"
					},
					Corn = {
						FontColor = "#DCDCDC",
						MainColor = "#252525",
						Accent = "#FF9000",
						BackgroundColor = "#191919",
						OutlineColor = "#000000"
					},
					Minecraft = {
						FontColor = "#FFFFFF",
						MainColor = "#333333",
						Accent = "#27CE40",
						BackgroundColor = "#262626",
						OutlineColor = "#000000"
					},
					Nord = {
						FontColor = "#D8DEE9",
						MainColor = "#2E3440",
						Accent = "#88C0D0",
						BackgroundColor = "#3B4252",
						OutlineColor = "#4C566A"
					},
					Monokai = {
						FontColor = "#F8F8F2",
						MainColor = "#272822",
						Accent = "#FD971F",
						BackgroundColor = "#1E1F1C",
						OutlineColor = "#75715E"
					},
					Cyberpunk = {
						FontColor = "#FF66C4",
						MainColor = "#0D0221",
						Accent = "#00FFFF",
						BackgroundColor = "#1A0033",
						OutlineColor = "#4A0072"
					},
					["Solarized Dark"] = {
						FontColor = "#EEE8D5",
						MainColor = "#002B36",
						Accent = "#268BD2",
						BackgroundColor = "#073642",
						OutlineColor = "#586E75"
					},
					Gruvbox = {
						FontColor = "#EBDBB2",
						MainColor = "#282828",
						Accent = "#FE8019",
						BackgroundColor = "#1D2021",
						OutlineColor = "#3C3836"
					},
					["Night Owl"] = {
						FontColor = "#d6deeb",
						MainColor = "#011627",
						Accent = "#82AAFF",
						BackgroundColor = "#0f111a",
						OutlineColor = "#000000"
					},
					["Arc Dark"] = {
						FontColor = "#ffffff",
						MainColor = "#383c4a",
						Accent = "#5294e2",
						BackgroundColor = "#2f343f",
						OutlineColor = "#000000"
					},
					Catppuccin = {
						FontColor = "#cdd6f4",
						MainColor = "#1e1e2e",
						Accent = "#89b4fa",
						BackgroundColor = "#181825",
						OutlineColor = "#000000"
					},
					["Tomorrow Night"] = {
						FontColor = "#cccccc",
						MainColor = "#1d1f21",
						Accent = "#81a2be",
						BackgroundColor = "#282a2e",
						OutlineColor = "#000000"
					},
					Molokai = {
						FontColor = "#f8f8f2",
						MainColor = "#1b1d1e",
						Accent = "#fd971f",
						BackgroundColor = "#272822",
						OutlineColor = "#000000"
					},
					["Material Palenight"] = {
						FontColor = "#c3e88d",
						MainColor = "#292d3e",
						Accent = "#82aaff",
						BackgroundColor = "#1e212e",
						OutlineColor = "#000000"
					},
					["Oceanic Next"] = {
						FontColor = "#d8dee9",
						MainColor = "#1b2b34",
						Accent = "#6699cc",
						BackgroundColor = "#0f1c26",
						OutlineColor = "#000000"
					},
					Spacegray = {
						FontColor = "#ffffff",
						MainColor = "#20242b",
						Accent = "#b3b3b3",
						BackgroundColor = "#2c2f36",
						OutlineColor = "#000000"
					},
					["PaperColor Dark"] = {
						FontColor = "#eeeeee",
						MainColor = "#1c1c1c",
						Accent = "#af5f5f",
						BackgroundColor = "#121212",
						OutlineColor = "#000000"
					},
					Edge = {
						FontColor = "#ffffff",
						MainColor = "#262a33",
						Accent = "#528bff",
						BackgroundColor = "#1c1f26",
						OutlineColor = "#000000"
					},
					["One Dark"] = {
						FontColor = "#abb2bf",
						MainColor = "#282c34",
						Accent = "#61afef",
						BackgroundColor = "#21252b",
						OutlineColor = "#000000"
					},
					["Tokyo Dark"] = {
						FontColor = "#c0caf5",
						MainColor = "#16161e",
						Accent = "#9aa5ce",
						BackgroundColor = "#0d0d15",
						OutlineColor = "#000000"
					},
					["DOS"] = {
						FontColor = "#00FF00",
						MainColor = "#000000",
						Accent = "#00AA00",
						BackgroundColor = "#000000",
						OutlineColor = "#222222"
					},
					["CRT Green"] = {
						FontColor = "#7FFF00",
						MainColor = "#101010",
						Accent = "#00FF00",
						BackgroundColor = "#050505",
						OutlineColor = "#1A1A1A"
					},
					["Matrix"] = {
						FontColor = "#00FF00",
						MainColor = "#0A0A0A",
						Accent = "#00CC66",
						BackgroundColor = "#000000",
						OutlineColor = "#0F0F0F"
					},
					["Old Terminal"] = {
						FontColor = "#00DD00",
						MainColor = "#111111",
						Accent = "#00AA00",
						BackgroundColor = "#000000",
						OutlineColor = "#2F2F2F"
					},
					["Midnight Retro"] = {
						FontColor = "#FF9EFF",
						MainColor = "#0F0F1F",
						Accent = "#9D00FF",
						BackgroundColor = "#0A0A1A",
						OutlineColor = "#1C1C2C"
					},
					["Neo Noir"] = {
						FontColor = "#FF3366",
						MainColor = "#1A1A1A",
						Accent = "#C50052",
						BackgroundColor = "#121212",
						OutlineColor = "#2A2A2A"
					},
					["Dark Cherry"] = {
						FontColor = "#FFE6F0",
						MainColor = "#2B0B0B",
						Accent = "#A30000",
						BackgroundColor = "#1A0000",
						OutlineColor = "#3B1C1C"
					},
					["Vintage Code"] = {
						FontColor = "#F4ECD8",
						MainColor = "#1B1B1B",
						Accent = "#CC5500",
						BackgroundColor = "#141414",
						OutlineColor = "#333333"
					},
					["Oblivion"] = {
						FontColor = "#E0E0E0",
						MainColor = "#202020",
						Accent = "#F92672",
						BackgroundColor = "#121212",
						OutlineColor = "#2E2E2E"
					},
					["Nocturne"] = {
						FontColor = "#DADADA",
						MainColor = "#121217",
						Accent = "#A3D2FF",
						BackgroundColor = "#0C0C10",
						OutlineColor = "#1A1A1F"
					},
					["Zerox"] = {
						FontColor = "#FFFFFF",
						MainColor = "#181818",
						Accent = "#AA00FF",
						BackgroundColor = "#0F0F0F",
						OutlineColor = "#2C2C2C"
					},
					["Void"] = {
						FontColor = "#DDDDDD",
						MainColor = "#0A0A0A",
						Accent = "#6600CC",
						BackgroundColor = "#000000",
						OutlineColor = "#1A1A1A"
					},
					["Carbon"] = {
						FontColor = "#E0E0E0",
						MainColor = "#2A2A2A",
						Accent = "#999999",
						BackgroundColor = "#1A1A1A",
						OutlineColor = "#383838"
					},
					["Black Ice"] = {
						FontColor = "#CFCFCF",
						MainColor = "#0E0E10",
						Accent = "#34BFFF",
						BackgroundColor = "#08080A",
						OutlineColor = "#1C1C1F"
					},
					["Terminal Wave"] = {
						FontColor = "#8AFFEF",
						MainColor = "#14191F",
						Accent = "#F92672",
						BackgroundColor = "#0B0F14",
						OutlineColor = "#1E252E"
					}
				}

				local selectedTheme = themes[v]
				if selectedTheme then
					for i, v in pairs(selectedTheme) do
						Library[i] = Color3.fromHex(v)
					end
					Library.DarkerAccent = Library:GetDarkerColor(Library.Accent)
					if fontcolor then
						fontcolor:Set(Library.FontColor)
					end
					if maincolor then
						maincolor:Set(Library.MainColor)
					end
					if accentcolor then
						accentcolor:Set(Library.Accent)
					end
					if outlinecolor then
						outlinecolor:Set(Library.OutlineColor)
					end
					if backgroundcolor then
						backgroundcolor:Set(Library.BackgroundColor)
					end
					Library:ChangeAccent()
				end
			end
		})
		maincolor = Themes:Colorpicker({
			Name = "Main Color",
			flag = "UI/MainColor",
			State = Library.MainColor,
			Callback = function(v)
				Library.MainColor = v
				Library:ChangeAccent()
			end
		})
		backgroundcolor = Themes:Colorpicker({
			Name = "Background Color",
			Flag = "UI/BackgroundColor",
			State = Library.BackgroundColor,
			Callback = function(v)
				Library.BackgroundColor = v
				Library:ChangeAccent()
			end
		})
		accentcolor = Themes:Colorpicker({
			Name = "Accent Color",
			Flag = "UI/AccentColor",
			State = Library.Accent,
			Callback = function(v)
				Library.Accent = v
				Library.DarkerAccent = Library:GetDarkerColor(Library.Accent)
				Library:ChangeAccent()
			end
		})
		outlinecolor = Themes:Colorpicker({
			Name = "Outline Color",
			Flag = "UI/OutlineColor",
			State = Library.OutlineColor,
			Callback = function(v)
				Library.OutlineColor = v
				Library:ChangeAccent()
			end
		})
		fontcolor = Themes:Colorpicker({
			Name = "Font Color",
			Flag = "UI/FontColor",
			State = Library.FontColor,
			Callback = function(v)
				Library.FontColor = v
				Library:ChangeAccent()
			end
		})
		Menu:Keybind({
			Name = "UI Toggle",
			Flag = "MenuKey",
			Default = Enum.KeyCode.F4,
			Mode = "Toggle",
			Callback = Library.SetOpen
		})
		Menu:Toggle({
			Name = "Keybind List",
			Flag = "KeybindList",
			Callback = function(v)
				Library.KeyList:SetVisible(v)
			end
		})
		Menu:Button({
			Name = "Unload Script",
			Callback = function()
				Library:Unload()
			end
		})
		Menu:Button({
			Name = "Reload Script",
			Callback = function()
				Library:Unload()
wait(3.0)
loadstring(game:HttpGet("https://raw.githubusercontent.com/hubmainv4/a/refs/heads/main/neoa"))()													
			end
		})
							
PlayerUtility:Button({
	Name = "Rejoin Server",
	Callback = function()
		local currentPlaceId = game.PlaceId
		local currentJobId = game.JobId
		
		local success = pcall(function()
			game:GetService("TeleportService"):TeleportToPlaceInstance(currentPlaceId, currentJobId, game.Players.LocalPlayer)
		end)
		
		if not success then
			Library:Notification("Unable to rejoin Server", 3, nil, "Top")
		end
	end
})
  
PlayerUtility:Button({
	Name = "Return to Lobby",
	Callback = function()
		local currentPlaceId = 2000062521
		
		local success = pcall(function()
			game:GetService("TeleportService"):Teleport(currentPlaceId, game.Players.LocalPlayer)
		end)
		
		if not success then
			Library:Notification("Unable to rejoin Server", 3, nil, "Top")
		end
	end
})
editingsectah:Button({
Name = "Load Infinite Yield",
Callback = function()
loadstring(game:HttpGet('https://raw.githubusercontent.com/EdgeIY/infiniteyield/master/source'))()							
end
})
editingsectah:Button({
Name = "Load Hydroxide",
Callback = function()
local owner = "Upbolt"
local branch = "revision"

local function webImport(file)
    return loadstring(game:HttpGetAsync(("https://raw.githubusercontent.com/%s/Hydroxide/%s/%s.lua"):format(owner, branch, file)), file .. '.lua')()
end

webImport("init")
webImport("ui/main")									
end
})
							
editingsectah:Button({
Name = "Load Explorer",
Callback = function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/infyiff/backup/main/dex.lua"))()								
end
})	

editingsectah:Button({
Name = "Load Full ACB",
Callback = function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/hubmainv4/a/refs/heads/main/acb2"))()								
end
})							
							
		randomfunc = Cfgs:Textbox({
			Flag = "SettingsConfigurationName",
			Name = "Config name"
		})
		Cfgs:Button({
			Name = "Create",
			Callback = function()
				local ConfigName = Library.Flags["SettingsConfigurationName"]
				if ConfigName and ConfigName ~= "" or not isfile(ConfigFolder .. "/configs/" .. ConfigName) then
					writefile(ConfigFolder .. "/configs/" .. ConfigName, Library:GetConfig())
					UpdateConfigList()
					randomfunc:set("")
					CFGList:Set(ConfigName)
					Library:Notification("Config Created: " .. ConfigName, 3, nil, "Top")
				end
			end
		})
		CFGList = Cfgs:Dropdown({
			Name = "Saved Configs",
			Flag = "SettingConfigurationList",
			Options = {}
		})
		if not isfolder(ConfigFolder) then
			makefolder(ConfigFolder)
		end
		if not isfolder(ConfigFolder .. "/configs") then
			makefolder(ConfigFolder .. "/configs")
		end
		Cfgs:Button({
			Name = "Save",
			Callback = function()
				local SelectedConfig = Library.Flags["SettingConfigurationList"]
				if SelectedConfig then
					writefile(ConfigFolder .. "/configs/" .. SelectedConfig, Library:GetConfig())
					Library:Notification("Config Saved: " .. SelectedConfig, 3, nil, "Top")
				else
					Library:Notification("No Config Selected!", 3, nil, "Top")
				end
			end
		})
		Cfgs:Button({
			Name = "Load",
			Callback = function()
				local SelectedConfig = Library.Flags["SettingConfigurationList"]
				if SelectedConfig then
					Library:LoadConfig(readfile(ConfigFolder .. "/configs/" .. SelectedConfig))
					CFGList:Set(SelectedConfig)
					Library:Notification("Config Loaded: " .. SelectedConfig, 3, nil, "Top")
				else
					Library:Notification("No Config Selected!", 3, nil, "Top")
				end
			end
		})
		Cfgs:Button({
			Name = "Set Auto Load",
			Callback = function()
				local SelectedConfig = Library.Flags["SettingConfigurationList"]
				if SelectedConfig then
					writefile(ConfigFolder .. "/autoload.txt", Library.Flags["SettingConfigurationList"])
					Library:Notification("Config Auto Loaded: " .. Library.Flags["SettingConfigurationList"], 7, nil, "Top")
					autoloadlabel:SetText("Current Auto Load: " .. Library.Flags["SettingConfigurationList"])
					loadedcfgshit = Library.Flags["SettingConfigurationList"]
				else
					Library:Notification("No Config Selected!", 3, nil, "Top")
				end
			end
		})
		Cfgs:Button({
			Name = "Delete",
			Callback = function()
				local SelectedConfig = Library.Flags["SettingConfigurationList"]
				if SelectedConfig then
					delfile(ConfigFolder .. "/configs/" .. SelectedConfig)
					Library:Notification("Config Deleted: " .. SelectedConfig, 3, nil, "Top")
					UpdateConfigList()
					CFGList:Set()
					if SelectedConfig == loadedcfgshit then
						autoloadlabel:SetText("Current Auto Load: None")
						delfile(ConfigFolder .. "/autoload.txt")
					end
				else
					Library:Notification("No Config Selected!", 3, nil, "Top")
				end
			end
		})
		Cfgs:Button({
			Name = "Refresh",
			Callback = function()
				UpdateConfigList()
				Library:Notification("Config List Refreshed", 3, nil, "Top")
			end
		})
		UpdateConfigList()
		autoloadlabel = Cfgs:Label({
			Name = "Current Auto Load:",
			Centered = true
		})
		Library:SetOpen()
		if isfile(ConfigFolder .. "/autoload.txt") then
			loadedcfgshit = readfile(ConfigFolder .. "/autoload.txt")
			local configFile = ConfigFolder .. "/configs/" .. loadedcfgshit
			if isfile(configFile) then
				autoloadlabel:SetText("Current Auto Load: " .. loadedcfgshit)
				Library:LoadConfig(readfile(configFile))
				CFGList:Set(loadedcfgshit)
			else
				autoloadlabel:SetText("Current Auto Load: None")
			end
		else
			autoloadlabel:SetText("Current Auto Load: None")
		end
	end
end
--
function Library:NewPicker(default, parent, count, flag, callback)
	-- // Instances
	local Icon = Library:Create('TextButton', {
		Parent = parent,
		Position = UDim2.new(1, - (count * 20) - (count * 6), 0.5, 0),
		Size = UDim2.new(0, 20, 0, 10),
		BackgroundColor3 = Color3.fromRGB(45, 45, 45),
		BorderColor3 = Color3.fromRGB(10, 10, 10),
		AnchorPoint = NewVector2(1, 0.5),
		AutoButtonColor = false,
		Text = ""
	})
	local IconInline = Library:Create('Frame', {
		Parent = Icon,
		Position = UDim2.new(0, 1, 0, 1),
		Size = UDim2.new(1, -2, 1, -2),
		BackgroundColor3 = default,
		BorderSizePixel = 0
	})
	local ColorWindow = Library:Create('Frame', {
		Parent = parent,
		Position = UDim2.new(1, -2, 1, 2),
		Size = UDim2.new(0, 188, 0, 170),
		BackgroundColor3 = Color3.fromRGB(45, 45, 45),
		BorderColor3 = Color3.fromRGB(10, 10, 10),
		AnchorPoint = NewVector2(1, 0),
		ZIndex = 100,
		Rotation = 0.00001,
		Visible = false
	})
	local WindowInline = Library:Create('Frame', {
		Parent = ColorWindow,
		Position = UDim2.new(0, 1, 0, 1),
		Size = UDim2.new(1, -2, 1, -2),
		BackgroundColor3 = "MainColor",
		BorderSizePixel = 0,
		ZIndex = 100
	})
	local Color = Library:Create('TextButton', {
		Parent = WindowInline,
		Position = UDim2.new(0, 8, 0, 10),
		Size = UDim2.new(0, 150, 0, 150),
		BackgroundColor3 = default,
		BorderColor3 = Color3.new(0, 0, 0),
		Text = "",
		TextColor3 = Color3.new(0, 0, 0),
		AutoButtonColor = false,
		FontFace = Library.Font,
		TextSize = 14,
		ZIndex = 100
	})
	local Sat = Library:Create('ImageLabel', {
		Parent = Color,
		Size = UDim2.new(1, 0, 1, 0),
		BackgroundColor3 = Color3.new(1, 1, 1),
		BackgroundTransparency = 1,
		BorderSizePixel = 0,
		BorderColor3 = Color3.new(0, 0, 0),
		Image = getcustomasset(Library.Folder .. "sat.jpg"),
		ZIndex = 100
	})
	Library:Create('ImageLabel', {
		Parent = Color,
		Size = UDim2.new(1, 0, 1, 0),
		BackgroundColor3 = Color3.new(1, 1, 1),
		BackgroundTransparency = 1,
		BorderSizePixel = 0,
		BorderColor3 = Color3.new(0, 0, 0),
		Image = getcustomasset(Library.Folder .. "val.jpg"),
		ZIndex = 100
	})
	local Pointer = Library:Create('Frame', {
		Parent = Color,
		Position = UDim2.new(1, 0, 1, 0),
		Size = UDim2.new(0, 1, 0, 1),
		BackgroundColor3 = Color3.new(1, 1, 1),
		BorderColor3 = Color3.new(0, 0, 0),
		ZIndex = 100
	})
	Library:Create('Frame', {
		Parent = Color,
		Position = UDim2.new(0, -2, 1, 5),
		Size = UDim2.new(0, 189, 0, 55),
		BackgroundColor3 = Color3.new(1, 1, 1),
		BackgroundTransparency = 1,
		BorderColor3 = Color3.new(0, 0, 0),
		ZIndex = 100
	})
	local ColorOutline = Library:Create('Frame', {
		Parent = Color,
		Position = UDim2.new(0, -1, 0, -1),
		Size = UDim2.new(1, 2, 1, 2),
		BackgroundColor3 = Color3.new(1, 1, 1),
		BackgroundTransparency = 1,
		BorderSizePixel = 0,
		BorderColor3 = Color3.new(0, 0, 0),
		ZIndex = 100
	})
	Library:Create('UIStroke', {
		Parent = ColorOutline,
		Color = Color3.fromRGB(45, 45, 45)
	})
	local Hue = Library:Create('ImageButton', {
		Parent = Color,
		Position = UDim2.new(1, 10, 0, 0),
		Size = UDim2.new(0, 10, 1, 0),
		BackgroundColor3 = Color3.new(1, 1, 1),
		BorderColor3 = Color3.new(0, 0, 0),
		Image = getcustomasset(Library.Folder .. "hue.jpg"),
		AutoButtonColor = false,
		ZIndex = 100
	})
	local HueOutline = Library:Create('Frame', {
		Parent = Hue,
		Position = UDim2.new(0, -1, 0, -1);
		Size = UDim2.new(1, 2, 1, 2);
		BackgroundColor3 = Color3.new(1, 1, 1);
		BackgroundTransparency = 1;
		BorderSizePixel = 0;
		BorderColor3 = Color3.new(0, 0, 0);
		ZIndex = 100
	})
	Library:Create('UIStroke', {
		Parent = HueOutline;
		Color = Color3.fromRGB(45, 45, 45)
	})
	local HueSlide = Library:Create('Frame', {
		Parent = Hue;
		Size = UDim2.new(1, 0, 0, 3),
		BackgroundColor3 = Color3.new(1, 1, 1),
		BorderColor3 = Color3.new(0, 0, 0),
		ZIndex = 100
	})
	local ModeOutline = Library:Create('Frame', {
		Parent = parent,
		Position = UDim2.new(1, 65, 0.5, 0),
		Size = UDim2.new(0, 60, 0, 12),
		BackgroundColor3 = "OutlineColor",
		BorderColor3 = Color3.new(0.0392, 0.0392, 0.0392),
		AnchorPoint = NewVector2(1, 0.5),
		AutomaticSize = Enum.AutomaticSize.Y,
		Rotation = 0.00001,
		Visible = false,
		ZIndex = 1020000010
	})
	local ModeInline = Library:Create('Frame', {
		Parent = ModeOutline,
		Position = UDim2.new(0, 1, 0, 1),
		Size = UDim2.new(1, -2, 1, -2),
		BackgroundColor3 = "MainColor",
		BorderSizePixel = 0,
		BorderColor3 = Color3.new(0, 0, 0),
		ZIndex = 1020000010
	})
	Library:Create('UIListLayout', {
		Parent = ModeInline;
		SortOrder = Enum.SortOrder.LayoutOrder
	})
	local Hold = Library:Create('TextButton', {
		Parent = ModeInline;
		Size = UDim2.new(1, 0, 0, 15),
		BackgroundColor3 = Color3.new(1, 1, 1),
		BackgroundTransparency = 1,
		BorderSizePixel = 0,
		BorderColor3 = Color3.new(0, 0, 0),
		Text = "Copy",
		TextColor3 = Color3.fromRGB(145, 145, 145),
		AutoButtonColor = false,
		FontFace = Library.Font,
		TextSize = Library.FontSize,
		TextStrokeTransparency = 0,
		ZIndex = 1020000010
	})
	local Toggle = Library:Create('TextButton', {
		Parent = ModeInline;
		Size = UDim2.new(1, 0, 0, 15),
		BackgroundColor3 = Color3.new(1, 1, 1),
		BackgroundTransparency = 1,
		BorderSizePixel = 0,
		BorderColor3 = Color3.new(0, 0, 0),
		Text = "Paste",
		TextColor3 = Color3.fromRGB(145, 145, 145),
		AutoButtonColor = false,
		FontFace = Library.Font,
		TextSize = Library.FontSize,
		TextStrokeTransparency = 0,
		ZIndex = 1020000010
	})
	Library:Connection(Icon.MouseEnter, function()
		Library:TweenProperty(Icon, "BorderColor3", Library.Accent, 0.2)
	end)
	--
	Library:Connection(Icon.MouseLeave, function()
		Library:TweenProperty(Icon, "BorderColor3", Color3.fromRGB(10, 10, 10), 0.2)
	end)

	-- // Connections
	local hue, sat, val = default:ToHSV()
	local hsv = default:ToHSV()

	local slidingsaturation = false
	local slidinghue = false

	local function update()
		local real_pos = userinput:GetMouseLocation()
		local mouse_position = NewVector2(real_pos.X - 5, real_pos.Y - 60)
		local relative_palette = (mouse_position - Color.AbsolutePosition)
		local relative_hue = (mouse_position - Hue.AbsolutePosition)

		--
		if slidingsaturation then
			sat = math.clamp(1 - relative_palette.X / Color.AbsoluteSize.X, 0, 1)
			val = math.clamp(1 - relative_palette.Y / Color.AbsoluteSize.Y, 0, 1)
		end 
		--
		if slidinghue then
			hue = math.clamp(relative_hue.Y / Hue.AbsoluteSize.Y, 0, 1)
		end  
		--
		hsv = Color3.fromHSV(hue, sat, val)
		Library:TweenProperty(Pointer, "Position", UDim2.new(math.clamp(1 - sat, 0.005, 0.995), 0, math.clamp(1 - val, 0.005, 0.995), 0), 0.05)
		Library:TweenProperty(Color, "BackgroundColor3", Color3.fromHSV(hue, 1, 1), 0.2)
		Library:TweenProperty(IconInline, "BackgroundColor3", hsv, 0.2)
		Library:TweenProperty(HueSlide, "Position", UDim2.new(0, 0, math.clamp(hue, 0.005, 0.995), 0), 0.05)
		if flag then
			Library.Flags[flag] = hsv
		end
		callback(hsv)
	end
	local function set(color)
		if type(color) ~= "boolean" then
			if type(color) == "table" then
				color = Color3.fromHSV(color[1], color[2], color[3])
			end
			if type(color) == "string" then
				local r, g, b = color:match("([%d%.]+),%s*([%d%.]+),%s*([%d%.]+)")
				color = Color3.new(tonumber(r), tonumber(g), tonumber(b))
			end
			local oldcolor = hsv
			hue, sat, val = color:ToHSV()
			hsv = Color3.fromHSV(hue, sat, val)
			if hsv ~= oldcolor then
				Library:TweenProperty(IconInline, "BackgroundColor3", hsv, 0.2)
				Library:TweenProperty(Color, "BackgroundColor3", Color3.fromHSV(hue, 1, 1), 0.2)
				Library:TweenProperty(Pointer, "Position", UDim2.new(math.clamp(1 - sat, 0.005, 0.995), 0, math.clamp(1 - val, 0.005, 0.995), 0), 0.05)
				Library:TweenProperty(HueSlide, "Position", UDim2.new(0, 0, math.clamp(hue, 0.005, 0.995), 0), 0.05)
				if flag then
					Library.Flags[flag] = hsv
				end
				callback(hsv)
			end
		end
	end
	Flags[flag] = set
	Library:Connection(Sat.InputBegan, function(input)
		if input.UserInputType == Enum.UserInputType.MouseButton1 then
			slidingsaturation = true
			update()
		end
	end)
	Library:Connection(Sat.InputEnded, function(input)
		if input.UserInputType == Enum.UserInputType.MouseButton1 then
			slidingsaturation = false
			update()
		end
	end)
	Library:Connection(Hue.InputBegan, function(input)
		if input.UserInputType == Enum.UserInputType.MouseButton1 then
			slidinghue = true
			update()
		end
	end)
	Library:Connection(Hue.InputEnded, function(input)
		if input.UserInputType == Enum.UserInputType.MouseButton1 then
			slidinghue = false
			update()
		end
	end)
	Library:Connection(userinput.InputChanged, function(input)
		if input.UserInputType == Enum.UserInputType.MouseMovement then
			if slidinghue then
				update()
			end
			if slidingsaturation then
				update()
			end
		end
	end)
	local function UpdateTransparency(pastebinihateu)
		Library:ManageTransparency(ColorWindow, "ColorWindow", 0.25, pastebinihateu or ColorWindow.Visible)
	end
	Library:Connection(Icon.MouseButton1Down, function()
		UpdateTransparency()
		if slidinghue then
			slidinghue = false
		end
		if slidingsaturation then
			slidingsaturation = false
		end
	end)
	Library:Connection(userinput.InputBegan, function(Input)
		if ColorWindow.Visible and Input.UserInputType == Enum.UserInputType.MouseButton1 then
			if not Library:IsMouseOverFrame(ColorWindow) and not Library:IsMouseOverFrame(Icon) then
				UpdateTransparency()
			end
		end
	end)
	Library:Connection(Icon.MouseButton2Down, function()
		Library:ManageTransparency(ModeOutline, "ModeOutline1", 0.2, ModeOutline.Visible)
	end)
	--
	Library:Connection(Hold.MouseButton1Down, function()
		Library.CopiedColor = hsv
	end)
	--
	Library:Connection(Toggle.MouseButton1Down, function()
		set(Library.CopiedColor or Color3.new(1, 1, 1))
	end)
	--
	Library:Connection(Toggle.MouseButton1Down, function()
		set(Color3.new(1, 1, 1))
	end)
	--
	Library:Connection(userinput.InputBegan, function(Input)
		if ModeOutline.Visible and Input.UserInputType == Enum.UserInputType.MouseButton1 then
			if not Library:IsMouseOverFrame(Icon) then
				Library:ManageTransparency(ModeOutline, "ModeOutline1", 0.2, ModeOutline.Visible)
			end
		end
	end)
	local colorpickertypes = {}
	function colorpickertypes:set(color)
		set(color)
	end
	update()
	UpdateTransparency(true)
	return colorpickertypes, ColorWindow
end
-- // Doc Functions
do
	local Pages = Library.Pages;
	local Sections = Library.Sections;
	function Library:Window()
		local Window = {
			Pages = {};
			Sections = {};
			Elements = {};
			Dragging = {
				false,
				UDim2.new(0, 0, 0, 0)
			};
			Size = UDim2.new(0, 580, 0, 625)
		};
		Library.Window = Window
		Library.ScreenGui = Library:Create("ScreenGui", {
			Parent = gethui(),
			DisplayOrder = 2
		}, true)
		local Outline = Library:Create('Frame', {
			Parent = Library.ScreenGui,
			Position = UDim2.new(0.5, 0, 0.5, 0),
			Size = Window.Size,
			BackgroundColor3 = "OutlineColor",
			BorderColor3 = Color3.new(0.0392, 0.0392, 0.0392),
			AnchorPoint = Vector2.new(0.5, 0.5),
			Visible = false
		})
		Library:Create('ImageLabel', {
			Parent = Outline,
			ImageColor3 = "Accent",
			Image = getcustomasset(Library.Folder .. "highlight.jpg"),
			ScaleType = Enum.ScaleType.Slice,
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			Size = UDim2.new(1, 40, 1, 40),
			Position = UDim2.new(0, -20, 0, -20),
			SliceCenter = Rect.new(Vector2.new(21, 21), Vector2.new(79, 79)),
			ZIndex = -1
		})
		local Inline = Library:Create('Frame', {
			Parent = Outline,
			Position = UDim2.new(0, 1, 0, 1),
			Size = UDim2.new(1, -2, 1, -2),
			BackgroundColor3 = "MainColor",
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0)
		})
		Library:Create('Frame', {
			Parent = Inline,
			Size = UDim2.new(1, 0, 0, 2),
			BackgroundColor3 = "Accent",
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0)
		})
		local HolderOutline = Library:Create('Frame', {
			Parent = Inline,
			Position = UDim2.new(0, 7, 0, 21),
			Size = UDim2.new(1, -14, 1, -38),
			BackgroundColor3 = "OutlineColor",
			BorderColor3 = Color3.new(0.0392, 0.0392, 0.0392)
		})
		local HolderInline = Library:Create('Frame', {
			Parent = HolderOutline,
			Position = UDim2.new(0, 1, 0, 1),
			Size = UDim2.new(1, -2, 1, -2),
			BackgroundColor3 = "BackgroundColor",
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0)
		})
		local Tabs = Library:Create('Frame', {
			Parent = HolderInline,
			Size = UDim2.new(1, 0, 0, 22),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0)
		})
		Library:Create('UIListLayout', {
			Parent = Tabs,
			FillDirection = Enum.FillDirection.Horizontal,
			SortOrder = Enum.SortOrder.LayoutOrder
		})
		local DragButton = Library:Create('TextButton', {
			Parent = Outline,
			Size = UDim2.new(1, 0, 0, 21),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			Text = "CryptHub Neo | 1.0 | Free Build",
			TextColor3 = "Accent",
			AutoButtonColor = false,
			FontFace = Library.Font,
			TextSize = Library.FontSize,
			TextStrokeTransparency = 0
		})
		--
		Library:KeybindList()
		Library.Holder = Outline
		Window.Elements = {
			TabHolder = Tabs,
			Holder = HolderInline
		}
		Library:Connection(DragButton.MouseButton1Down, function()
			local Location = userinput:GetMouseLocation()
			Window.Dragging[1] = true
			Window.Dragging[2] = UDim2.new(0, Location.X - Outline.AbsolutePosition.X, 0, Location.Y - Outline.AbsolutePosition.Y)
		end)
		Library:Connection(userinput.InputEnded, function(Input)
			if Input.UserInputType == Enum.UserInputType.MouseButton1 and Window.Dragging[1] then
				Window.Dragging[1] = false
				Window.Dragging[2] = UDim2.new(0, 0, 0, 0)
			end
		end)
		Library:Connection(userinput.InputChanged, function()
			local Location = userinput:GetMouseLocation()
			if Window.Dragging[1] then
				Outline.Position = UDim2.new(
					0,
					Location.X - Window.Dragging[2].X.Offset + (Outline.Size.X.Offset * Outline.AnchorPoint.X),
					0,
					Location.Y - Window.Dragging[2].Y.Offset + (Outline.Size.Y.Offset * Outline.AnchorPoint.Y)
				)
			end
		end)
		function Window:UpdateTabs()
			for _, Page in pairs(Window.Pages) do
				Page.Elements.Button.Size = UDim2.new(1 / #Window.Pages, 0, 1, 0)
				Page:Turn(Page.Open)
			end
		end
		Library:SetOpen()
		return setmetatable(Window, Library)
	end
	--
	function Library:Page(Properties)
		if not Properties then
			Properties = {}
		end
		--
		local Page = {
			Name = Properties.Name or "Page",
			Window = self,
			Open = false,
			Sections = {},
			Elements = {},
		}
		--
		local TabButton = Library:Create('TextButton', {
			Parent = Page.Window.Elements.TabHolder,
			Size = UDim2.new(0.25, 0, 1, 0),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			Text = Page.Name,
			TextColor3 = Color3.new(0.5686, 0.5686, 0.5686),
			AutoButtonColor = false,
			FontFace = Library.Font,
			TextSize = Library.FontSize,
			TextStrokeTransparency = 0,
			LineHeight = 1.1,
		})
		local TabAccent = Library:Create('Frame', {
			Parent = TabButton,
			Size = UDim2.new(1, 0, 0, 2),
			BackgroundColor3 = "Accent",
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
		})
		local Left = Library:Create('ScrollingFrame', {
			Parent = Page.Window.Elements.Holder,
			Position = UDim2.new(0, 5, 0, 31),
			Size = UDim2.new(0.485, -3, 1, -32),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			Visible = false,
			CanvasSize = UDim2.new(0, 0, 0, 0),
			ScrollBarThickness = 0,
			BackgroundTransparency = 1
		})
		local Right = Library:Create('ScrollingFrame', {
			Parent = Page.Window.Elements.Holder,
			Position = UDim2.new(0.5, 5, 0, 31),
			Size = UDim2.new(0.485, -3, 1, -32),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			Visible = false,
			CanvasSize = UDim2.new(0, 0, 0, 0),
			ScrollBarThickness = 0,
			BackgroundTransparency = 1
		})
		local UIListLayout = Library:Create('UIListLayout', {
			Parent = Left,
			FillDirection = Enum.FillDirection.Vertical;
			SortOrder = Enum.SortOrder.LayoutOrder;
			HorizontalAlignment = Enum.HorizontalAlignment.Center;
			Padding = UDim.new(0, 12)
		})
		local UIListLayout_2 = Library:Create('UIListLayout', {
			Parent = Right,
			FillDirection = Enum.FillDirection.Vertical;
			SortOrder = Enum.SortOrder.LayoutOrder;
			HorizontalAlignment = Enum.HorizontalAlignment.Center;
			Padding = UDim.new(0, 12)
		})
		Library:Create('UIPadding', {
			Parent = Left,
			PaddingTop = UDim.new(0, 4)
		})
		Library:Create('UIPadding', {
			Parent = Right,
			PaddingTop = UDim.new(0, 4)
		})

		Library:Connection(UIListLayout_2:GetPropertyChangedSignal('AbsoluteContentSize'), function()
			Right.CanvasSize = UDim2.fromOffset(0, UIListLayout_2.AbsoluteContentSize.Y + 8)
		end)

		Library:Connection(UIListLayout:GetPropertyChangedSignal('AbsoluteContentSize'), function()
			Left.CanvasSize = UDim2.fromOffset(0, UIListLayout.AbsoluteContentSize.Y + 8)
		end)

		function Page:Turn(bool)
			if bool then
				Library:AddToThemeObjects(TabButton, {
					TextColor3 = "Accent"
				})
			end
			Page.Open = bool
			Left.Visible = Page.Open
			Right.Visible = Page.Open
			Library:TweenProperty(TabAccent, "Transparency", Page.Open and 0 or 1, 0.25)
			Library:TweenProperty(TabButton, "TextColor3", Page.Open and Library.Accent or Color3.fromRGB(145, 145, 145), 0.25)
			if not bool then
				Library:RemoveFromThemeObjects(TabButton)
			end
		end
		--
		Library:Connection(TabButton.MouseButton1Down, function()
			if not Page.Open then
				Page:Turn(true)
				for _, Pages in pairs(Page.Window.Pages) do
					if Pages.Open and Pages ~= Page then
						Pages:Turn(false)
					end
				end
			end
		end)
		--
		Library:Connection(TabButton.MouseEnter, function()
			if not Page.Open then
				Library:TweenProperty(TabButton, "TextColor3", Library.Accent, 0.2)
			end
		end)
		--
		Library:Connection(TabButton.MouseLeave, function()
			if not Page.Open then
				Library:TweenProperty(TabButton, "TextColor3", Color3.fromRGB(145, 145, 145), 0.2)
			end
		end)

		-- // Elements
		Page.Elements = {
			Left = Left,
			Right = Right,
			Button = TabButton,
		}

		-- // Drawings
		if #Page.Window.Pages == 0 then
			Page:Turn(true)
		end
		Page.Window.Pages[#Page.Window.Pages + 1] = Page
		Page.Window:UpdateTabs()
		return setmetatable(Page, Library.Pages)
	end
	--
	function Pages:Section(Properties)
		if not Properties then
			Properties = {}
		end
		--
		local Section = {
			Name = Properties.Name or "Section",
			Page = self,
			Side = (Properties.side or Properties.Side or "left"):lower(),
			Elements = {},
			Content = {},
		}
		--
		local SectionOutline = Library:Create('Frame', {
			Parent = Section.Side == "left" and Section.Page.Elements.Left or Section.Side == "right" and Section.Page.Elements.Right,
			Size = UDim2.new(1, 0, 0, 20),
			BackgroundColor3 = "OutlineColor",
			BorderColor3 = Color3.new(0.0392, 0.0392, 0.0392),
			AutomaticSize = Enum.AutomaticSize.Y,
		})
		local SectionInline = Library:Create('Frame', {
			Parent = SectionOutline,
			Position = UDim2.new(0, 1, 0, 1),
			Size = UDim2.new(1, -2, 1, -2),
			BackgroundColor3 = "BackgroundColor",
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0)
		})
		local Container = Library:Create('Frame', {
			Parent = SectionInline,
			Position = UDim2.new(0, 7, 0, 12),
			Size = UDim2.new(1, -14, 1, -10),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			AutomaticSize = Enum.AutomaticSize.Y
		})
		Library:Create('UIListLayout', {
			Parent = Container,
			SortOrder = Enum.SortOrder.LayoutOrder,
			Padding = UDim.new(0, 10)
		})
		Library:Create('Frame', {
			Parent = Container,
			Position = UDim2.new(0, 0, 1, 0),
			Size = UDim2.new(1, 0, 0, 2),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			LayoutOrder = 1000
		})
		Library:Create('Frame', {
			Parent = SectionInline,
			Size = UDim2.new(1, 0, 0, 2),
			BackgroundColor3 = "Accent",
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0)
		})
		local Title = Library:Create('TextLabel', {
			Parent = SectionOutline,
			Position = UDim2.new(0, 10, 0, -6),
			Size = UDim2.new(0, 100, 0, 16),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			TextColor3 = "FontColor",
			FontFace = Library.Font,
			TextSize = Library.FontSize,
			ZIndex = 3,
			TextXAlignment = Enum.TextXAlignment.Left,
			Text = Section.Name,
			TextStrokeTransparency = 0
		})
		local TextBorder = Library:Create('Frame', {
			Parent = SectionOutline,
			Position = UDim2.new(0, 6, 0, -2),
			Size = UDim2.new(0, Title.TextBounds.X + 8, 0, 4),
			BackgroundColor3 = "BackgroundColor",
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0)
		})

		-- // Elements
		Section.Elements = {
			SectionContent = Container;
			SectionHolder = SectionOutline;
		}

		-- // Returning
		Section.Page.Sections[#Section.Page.Sections + 1] = Section
		task.wait()
		TextBorder.Size = UDim2.new(0, Title.TextBounds.X + 8, 0, 5)
		return setmetatable(Section, Library.Sections)
	end
	--
	function Sections:Toggle(Properties)
		if not Properties then
			Properties = {}
		end
		--
		local Toggle = {
			Window = self.Window,
			Page = self.Page,
			Section = self,
			Risky = Properties.Risky or false,
			Name = Properties.Name or "Toggle",
			State = (
				Properties.state
					or Properties.State
					or Properties.def
					or Properties.Def
					or Properties.default
					or Properties.Default
					or false
			),
			Callback = (
				Properties.callback
					or Properties.Callback
					or Properties.callBack
					or Properties.CallBack
					or function()
			end
			),
			Flag = (
				Properties.flag
					or Properties.Flag
					or Properties.pointer
					or Properties.Pointer
					or Library.NextFlag()
			),
			Toggled = false,
			Colorpickers = 0,
			ListValue = nil,
		}
		--
		local NewToggle = Library:Create('TextButton', {
			Parent = Toggle.Section.Elements.SectionContent,
			Size = UDim2.new(1, 0, 0, 10),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			Text = "",
			TextColor3 = Color3.new(0, 0, 0),
			AutoButtonColor = false,
			FontFace = Library.Font,
			TextSize = 14
		})
		local Outline = Library:Create('Frame', {
			Parent = NewToggle,
			Size = UDim2.new(0, 10, 0, 10),
			BackgroundColor3 = "OutlineColor",
			BorderColor3 = Color3.new(0.0392, 0.0392, 0.0392)
		})
		local Inline = Library:Create('Frame', {
			Parent = Outline,
			Position = UDim2.new(0, 1, 0, 1),
			Size = UDim2.new(1, -2, 1, -2),
			BackgroundColor3 = "BackgroundColor",
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0)
		})
		local Title = Library:Create('TextLabel', {
			Parent = NewToggle,
			Position = UDim2.new(0, 15, 0, 0),
			Size = UDim2.new(1, 0, 0, 10),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			TextColor3 = Toggle.Risky and Color3.fromRGB(255, 77, 74) or Color3.new(0.5686, 0.5686, 0.5686),
			FontFace = Library.Font,
			TextSize = Library.FontSize,
			TextXAlignment = Enum.TextXAlignment.Left,
			Text = Toggle.Name,
			TextStrokeTransparency = 0
		})
		-- // Functions
		local function SetState(value)
			if value == true then
				Toggle.Toggled = true
			elseif value == false then
				Toggle.Toggled = false
			else
				Toggle.Toggled = not Toggle.Toggled
			end
			if Toggle.Toggled then
				Library:AddToThemeObjects(Outline, {
					BackgroundColor3 = "DarkerAccent"
				})
				Library:AddToThemeObjects(Inline, {
					BackgroundColor3 = "Accent"
				})
				if not Toggle.Risky then
					Library:AddToThemeObjects(Title, {
						TextColor3 = "FontColor"
					})
				end
				Library:TweenProperty(Outline, "BackgroundColor3", Library.DarkerAccent, 0.2)
				Library:TweenProperty(Inline, "BackgroundColor3", Library.Accent, 0.2)
				if Toggle.ListValue then
					Toggle.ListValue:SetColorBlue(true)
				end
			else
				Library:RemoveFromThemeObjects(Outline)
				Library:RemoveFromThemeObjects(Inline)
				if not Toggle.Risky then
					Library:RemoveFromThemeObjects(Title)
				end
				Library:TweenProperty(Outline, "BackgroundColor3", Library.OutlineColor, 0.2)
				Library:TweenProperty(Inline, "BackgroundColor3", Library.BackgroundColor, 0.2)
				if Toggle.ListValue then
					Toggle.ListValue:SetColorBlue(false)
				end
			end
			Library.Flags[Toggle.Flag] = Toggle.Toggled
			Toggle.Callback(Toggle.Toggled)
		end
		--
		Library:Connection(NewToggle.MouseButton1Down, SetState)
		Library:Connection(NewToggle.MouseEnter, function()
			Library:TweenProperty(Outline, "BackgroundColor3", Library.DarkerAccent, 0.2)
			Library:TweenProperty(Title, "TextColor3", Toggle.Risky and Color3.fromRGB(255, 0, 0) or Library.Accent, 0.2)
		end)
		
		Library:Connection(NewToggle.MouseLeave, function()
			Library:TweenProperty(Outline, "BackgroundColor3", Toggle.Toggled and Library.DarkerAccent or Library.OutlineColor, 0.2)
			
			if Toggle.Risky then
				Library:TweenProperty(Title, "TextColor3", Toggle.Toggled and Color3.fromRGB(255, 0, 0) or Color3.fromRGB(255, 77, 74), 0.2)
			else
				Library:TweenProperty(Title, "TextColor3", Toggle.Toggled and Library.FontColor or Color3.fromRGB(145, 145, 145), 0.2)
			end
		end)		
		function Toggle:Keybind(Properties)
			local Properties = Properties or {}
			local Keybind = {
				Section = self,
				State = (
					Properties.state
						or Properties.State
						or Properties.def
						or Properties.Def
						or Properties.default
						or Properties.Default
						or nil
				),
				Mode = (Properties.mode or Properties.Mode or "Toggle"),
				Ignore = (Properties.ignore or Properties.Ignore or false),
				UseKey = (Properties.UseKey or false),
				FuckThisToggle = (Properties.FuckThisToggle or false),
				Callback = (
					Properties.callback
						or Properties.Callback
						or Properties.callBack
						or Properties.CallBack
						or function()
				end
				),
				Flag = Toggle.Flag .. " Keybind",
				Name = Properties.name or Properties.Name or "Keybind",
				Binding = nil,
			}
			local Key
			--
			local Outline = Library:Create('TextButton', {
				Parent = NewToggle,
				Position = UDim2.new(1, 0, 0.5, 0),
				Size = UDim2.new(0, 40, 0, 12),
				BackgroundColor3 = "OutlineColor",
				BorderColor3 = Color3.new(0.0392, 0.0392, 0.0392),
				AnchorPoint = NewVector2(1, 0.5),
				Text = "",
				AutoButtonColor = false
			})
			local Inline = Library:Create('Frame', {
				Parent = Outline,
				Position = UDim2.new(0, 1, 0, 1),
				Size = UDim2.new(1, -2, 1, -2),
				BackgroundColor3 = "MainColor",
				BorderSizePixel = 0,
				BorderColor3 = Color3.new(0, 0, 0)
			})
			local Value = Library:Create('TextLabel', {
				Parent = Inline,
				Size = UDim2.new(1, 0, 1, 0),
				BackgroundColor3 = Color3.new(1, 1, 1),
				BackgroundTransparency = 1,
				BorderSizePixel = 0,
				BorderColor3 = Color3.new(0, 0, 0),
				Text = "",
				TextColor3 = "FontColor",
				FontFace = Library.Font,
				TextSize = Library.FontSize,
				TextStrokeTransparency = 0
			})

			local ModeOutline = Library:Create('Frame', {
				Parent = NewToggle,
				Position = UDim2.new(1, 65, 0.5, 0),
				Size = UDim2.new(0, 60, 0, 12),
				BackgroundColor3 = "OutlineColor",
				BorderColor3 = Color3.new(0.0392, 0.0392, 0.0392),
				AnchorPoint = NewVector2(1, 0.5),
				AutomaticSize = Enum.AutomaticSize.Y,
				Rotation = 0.00001,
				Visible = false,
				ZIndex = 1020000010
			})
			local ModeInline = Library:Create('Frame', {
				Parent = ModeOutline,
				Position = UDim2.new(0, 1, 0, 1),
				Size = UDim2.new(1, -2, 1, -2),
				BackgroundColor3 = "MainColor",
				BorderSizePixel = 0,
				BorderColor3 = Color3.new(0, 0, 0),
				ZIndex = 1020000010
			})
			Library:Create('UIListLayout', {
				Parent = ModeInline,
				SortOrder = Enum.SortOrder.LayoutOrder
			})
			local Hold = Library:Create('TextButton', {
				Parent = ModeInline,
				Size = UDim2.new(1, 0, 0, 15),
				BackgroundColor3 = Color3.new(1, 1, 1),
				BackgroundTransparency = 1,
				BorderSizePixel = 0,
				BorderColor3 = Color3.new(0, 0, 0),
				Text = "Hold",
				TextColor3 = Color3.new(0.5686, 0.5686, 0.5686),
				AutoButtonColor = false,
				FontFace = Library.Font,
				TextSize = Library.FontSize,
				TextStrokeTransparency = 0,
				ZIndex = 1020000010
			})
			local Toggle = Library:Create('TextButton', {
				Parent = ModeInline,
				Size = UDim2.new(1, 0, 0, 15),
				BackgroundColor3 = Color3.new(1, 1, 1),
				BackgroundTransparency = 1,
				BorderSizePixel = 0,
				BorderColor3 = Color3.new(0, 0, 0),
				Text = "Toggle",
				TextColor3 = Color3.new(0.5686, 0.5686, 0.5686),
				AutoButtonColor = false,
				FontFace = Library.Font,
				TextSize = Library.FontSize,
				TextStrokeTransparency = 0,
				ZIndex = 1020000010
			})
			self.ListValue = Library.KeyList:NewKey(tostring(Keybind.State):gsub("Enum.KeyCode.", ""), Title.Text, not Keybind.FuckThisToggle and Keybind.Mode)
			
			local c
			-- // Functions
			local function set(newkey)
				local modetable = {
					"Toggle",
					"Hold"
				}
				if string.find(tostring(newkey), "Enum") then
					if c then
						c:Disconnect()
						SetState(false)
					end
					if tostring(newkey):find("Enum.KeyCode.") then
						newkey = Enum.KeyCode[tostring(newkey):gsub("Enum.KeyCode.", "")]
					elseif tostring(newkey):find("Enum.UserInputType.") then
						newkey = Enum.UserInputType[tostring(newkey):gsub("Enum.UserInputType.", "")]
					end
					if newkey == Enum.KeyCode.Backspace or newkey == Enum.KeyCode.Escape then
						Key = nil
						if Keybind.Flag then
							Library.Flags[Keybind.Flag] = Key
						end
						Keybind.Callback(Key)
						local text = ""
						Value.Text = text
						self.ListValue:Update(text, self.Name, not Keybind.FuckThisToggle and Keybind.Mode)
						self.ListValue:SetVisible(false)
					elseif newkey ~= nil then
						Key = newkey
						if Keybind.Flag then
							Library.Flags[Keybind.Flag] = Key
						end
						Keybind.Callback(Key)
						local text = (Library.Keys[newkey] or tostring(newkey):gsub("Enum.KeyCode.", ""))
						Value.Text = text
						self.ListValue:Update(text, self.Name, not Keybind.FuckThisToggle and Keybind.Mode)
					end
					Library.Flags[Keybind.Flag .. "_KEY"] = newkey
				elseif table.find(modetable, newkey) then
					if not Keybind.FuckThisToggle then
						if Keybind.Mode == "Toggle" then
							Library:TweenProperty(Toggle, "TextColor3", Library.FontColor, 0.2)
							Library:TweenProperty(Hold, "TextColor3", Color3.fromRGB(145, 145, 145), 0.2)
							Library:AddToThemeObjects(Toggle, {
								TextColor3 = "FontColor"
							})
							Library:RemoveFromThemeObjects(Hold)
						elseif Keybind.Mode == "Hold" then
							Library:TweenProperty(Hold, "TextColor3", Library.FontColor, 0.2)
							Library:TweenProperty(Toggle, "TextColor3", Color3.fromRGB(145, 145, 145), 0.2)
							Library:AddToThemeObjects(Hold, {
								TextColor3 = "FontColor"
							})
							Library:RemoveFromThemeObjects(Toggle)
						end
						Library.Flags[Keybind.Flag .. "_KEY STATE"] = newkey
						Keybind.Mode = newkey
						if Key ~= nil then
							self.ListValue:Update((Library.Keys[Key] or tostring(Key):gsub("Enum.KeyCode.", "")), self.Name, not Keybind.FuckThisToggle and Keybind.Mode)
						end
					end
				else
					if Keybind.Flag then
						Library.Flags[Keybind.Flag] = newkey
					end
					Keybind.Callback(newkey)
				end
			end
			--
			set(Keybind.State)
			set(Keybind.Mode)
			Library:Connection(Outline.MouseButton1Click, function()
				if not Keybind.Binding then
					Value.Text = "..."
					Keybind.Binding = Library:Connection(userinput.InputBegan, function(input)
						set(input.UserInputType == Enum.UserInputType.Keyboard and input.KeyCode or input.UserInputType)
						Library:Disconnect(Keybind.Binding)
						task.wait()
						Keybind.Binding = nil
					end
					)
				end
			end)
			--
			if not Keybind.FuckThisToggle then
				Library:Connection(userinput.InputBegan, function(inp)
					if not userinput:GetFocusedTextBox() then	
						if (inp.KeyCode == Key or inp.UserInputType == Key) and not Keybind.Binding and not Keybind.UseKey then
							if Keybind.Mode == "Hold" then
								c = Library:Connection(runserv.RenderStepped, function()
									SetState(true)
								end)
							elseif Keybind.Mode == "Toggle" then
								SetState()
								if self.Toggled then
									Library:TweenProperty(Title, "TextColor3", self.Risky and Color3.fromRGB(255, 0, 0) or Library.FontColor, 0.2)
								else
									Library:TweenProperty(Title, "TextColor3", self.Risky and Color3.fromRGB(255, 77, 74) or Color3.fromRGB(145, 145, 145), 0.2)
								end
							end
						end
					end
				end)
				--
				Library:Connection(userinput.InputEnded, function(inp)
					if not userinput:GetFocusedTextBox() then
						if Keybind.Mode == "Hold" and not Keybind.UseKey then
							if Key ~= "" or Key ~= nil then
								if inp.KeyCode == Key or inp.UserInputType == Key then
									if c then
										c:Disconnect()
										SetState(false)
									end
								end
							end
						end
					end
				end)
				--
				Library:Connection(Outline.MouseButton2Down, function()
					Library:ManageTransparency(ModeOutline, "ModeOutline2", 0.2, ModeOutline.Visible)
				end)
				--
				Library:Connection(Hold.MouseButton1Down, function()
					set("Hold")
					Library:TweenProperty(Hold, "TextColor3", Library.FontColor, 0.2)
					Library:TweenProperty(Toggle, "TextColor3", Color3.fromRGB(145, 145, 145), 0.2)
				end)
				--
				Library:Connection(Toggle.MouseButton1Down, function()
					set("Toggle")
					Library:TweenProperty(Toggle, "TextColor3", Library.FontColor, 0.2)
					Library:TweenProperty(Hold, "TextColor3", Color3.fromRGB(145, 145, 145), 0.2)
				end)
				--
				Library:Connection(userinput.InputBegan, function(Input)
					if ModeOutline.Visible and Input.UserInputType == Enum.UserInputType.MouseButton1 then
						if not Library:IsMouseOverFrame(ModeOutline) then
							Library:ManageTransparency(ModeOutline, "ModeOutline2", 0.2, ModeOutline.Visible)
						end
					end
				end)
			end
			--
			Library:Connection(Outline.MouseEnter, function()
				Library:TweenProperty(Outline, "BorderColor3", Library.Accent, 0.2)
			end)
			--
			Library:Connection(Outline.MouseLeave, function()
				Library:TweenProperty(Outline, "BorderColor3", Color3.new(0.0392, 0.0392, 0.0392), 0.2)
			end)
			--
			Library.Flags[Keybind.Flag .. "_KEY"] = Keybind.State
			Library.Flags[Keybind.Flag .. "_KEY STATE"] = Keybind.Mode
			Flags[Keybind.Flag] = set
			Flags[Keybind.Flag .. "_KEY"] = set
			Flags[Keybind.Flag .. "_KEY STATE"] = set
			--
			function Keybind:Set(key)
				set(key)
			end
		
			-- // Returning
			return Keybind
		end
		function Toggle:Colorpicker(Properties)
			local Properties = Properties or {}
			local Colorpicker = {
				State = (
					Properties.state
						or Properties.State
						or Properties.def
						or Properties.Def
						or Properties.default
						or Properties.Default
						or Color3.fromRGB(255, 0, 0)
				),
				Callback = (
					Properties.callback
						or Properties.Callback
						or Properties.callBack
						or Properties.CallBack
						or function()
				end
				),
				Flag = (
					Properties.flag
						or Properties.Flag
						or Properties.pointer
						or Properties.Pointer
						or Library.NextFlag()
				),
			}
			-- // Functions
			Toggle.Colorpickers = Toggle.Colorpickers + 1
			local colorpickertypes = Library:NewPicker(
				Colorpicker.State,
				NewToggle,
				Toggle.Colorpickers - 1,
				Colorpicker.Flag,
				Colorpicker.Callback
			)
			function Colorpicker:Set(color)
				colorpickertypes:set(color)
			end

			-- // Returning
			return Colorpicker
		end
		function Toggle.Set(bool)
			bool = type(bool) == "boolean" and bool or false
			if Toggle.Toggled ~= bool then
				SetState()
				local color
				if Toggle.Risky then
					color = Toggle.Toggled and Color3.fromRGB(255, 0, 0) or Color3.fromRGB(255, 77, 74)
				else
					color = Toggle.Toggled and Library.FontColor or Color3.fromRGB(145, 145, 145)
				end
				Library:TweenProperty(Title, "TextColor3", color, 0.2)
			end
		end
		-- // Misc Functions
		Toggle.Set(Toggle.State)
		Library.Flags[Toggle.Flag] = Toggle.State
		Flags[Toggle.Flag] = Toggle.Set
		Library.Toggles[Toggle.Flag] = Toggle

		-- // Returning
		return Toggle
	end
	--
	function Sections:Slider(Properties)
		if not Properties then
			Properties = {}
		end
		--
		local Slider = {
			Window = self.Window,
			Page = self.Page,
			Section = self,
			Name = Properties.Name or nil,
			Min = (Properties.min or Properties.Min or Properties.minimum or Properties.Minimum or 0),
			State = (
				Properties.state
					or Properties.State
					or Properties.def
					or Properties.Def
					or Properties.default
					or Properties.Default
					or 0
			),
			Max = (Properties.max or Properties.Max or Properties.maximum or Properties.Maximum or 100),
			Sub = (
				Properties.suffix
					or Properties.Suffix
					or Properties.ending
					or Properties.Ending
					or Properties.prefix
					or Properties.Prefix
					or Properties.measurement
					or Properties.Measurement
					or ""
			),
			Decimals = (Properties.decimals or Properties.Decimals or 1),
			Callback = (
				Properties.callback
					or Properties.Callback
					or Properties.callBack
					or Properties.CallBack
					or function()
			end
			),
			Flag = (
				Properties.flag
					or Properties.Flag
					or Properties.pointer
					or Properties.Pointer
					or Library.NextFlag()
			),
		}
		local TextValue = ("[value]" .. Slider.Sub)
		--
		local NewSlider = Library:Create('TextButton', {
			Parent = Slider.Section.Elements.SectionContent,
			Size = UDim2.new(1, 0, 0, 22),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			Text = "",
			TextColor3 = Color3.new(0, 0, 0),
			AutoButtonColor = false,
			FontFace = Library.Font,
			TextSize = 14,
		})
		local Outline = Library:Create('Frame', {
			Parent = NewSlider,
			Position = UDim2.new(0, 15, 1, 0),
			Size = UDim2.new(1, -30, 0, 7),
			BackgroundColor3 = "OutlineColor",
			BorderColor3 = Color3.new(0.0392, 0.0392, 0.0392),
			AnchorPoint = NewVector2(0, 1)
		})
		local Inline = Library:Create('Frame', {
			Parent = Outline,
			Position = UDim2.new(0, 1, 0, 1),
			Size = UDim2.new(1, -2, 1, -2),
			BackgroundColor3 = "MainColor",
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0)
		})
		local Accent = Library:Create('TextButton', {
			Parent = Inline,
			Size = UDim2.new(0, 0, 1, 0),
			BackgroundColor3 = "Accent",
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			Text = "",
			TextColor3 = Color3.new(0, 0, 0),
			AutoButtonColor = false,
			FontFace = Library.Font,
			TextSize = 14
		})
		local Add = Library:Create('TextButton', {
			Parent = Outline,
			Position = UDim2.new(1, 5, 0.5, 0),
			Size = UDim2.new(0, 10, 0, 10),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			AnchorPoint = NewVector2(0, 0.5),
			Text = "+",
			TextColor3 = Color3.new(0.5686, 0.5686, 0.5686),
			AutoButtonColor = false,
			FontFace = Library.Font,
			TextSize = Library.FontSize,
			TextStrokeTransparency = 0
		})
		local Subtract = Library:Create('TextButton', {
			Parent = Outline,
			Position = UDim2.new(0, -15, 0.5, 0),
			Size = UDim2.new(0, 10, 0, 10),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			AnchorPoint = NewVector2(0, 0.5),
			Text = "-",
			TextColor3 = Color3.new(0.5686, 0.5686, 0.5686),
			AutoButtonColor = false,
			FontFace = Library.Font,
			TextSize = Library.FontSize,
			TextStrokeTransparency = 0
		})
		local Title = Library:Create('TextLabel', {
			Parent = NewSlider,
			Position = UDim2.new(0, 15, 0, 0),
			Size = UDim2.new(1, 0, 0, 10),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			TextColor3 = Color3.new(0.5686, 0.5686, 0.5686),
			FontFace = Library.Font,
			TextSize = Library.FontSize,
			TextXAlignment = Enum.TextXAlignment.Left,
			Text = Slider.Name,
			TextStrokeTransparency = 0,
		})
		local Value = Library:Create('TextBox', {
			Parent = NewSlider,
			Position = UDim2.new(0, 15, 0, 0),
			Size = UDim2.new(1, -30, 0, 10),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			TextColor3 = "FontColor",
			FontFace = Library.Font,
			TextSize = Library.FontSize,
			TextXAlignment = Enum.TextXAlignment.Right,
			TextStrokeTransparency = 0
		})
		--
		-- // Functions
		local Sliding = false
		local Val = Slider.State
		local function Round(Number, Float)
			return math.floor(Number / Float + 0.5) * Float
		end
		
		local function Set(value)
			value = math.clamp(Round(value, Slider.Decimals), Slider.Min, Slider.Max)
			local sizeX = ((value - Slider.Min) / (Slider.Max - Slider.Min))
			Library:TweenProperty(Accent, "Size", UDim2.new(sizeX, 0, 1, 0), 0.2)
			Value.Text = TextValue:gsub("%[value%]", string.format("%.14g", value))
			Val = value
			Library.Flags[Slider.Flag] = value
			Slider.Callback(value)
		end	
		--
		local function Slide(input)
			local sizeX = (input.Position.X - Outline.AbsolutePosition.X) / Outline.AbsoluteSize.X
			local value = ((Slider.Max - Slider.Min) * sizeX) + Slider.Min
			Set(value)
		end
		--
		Library:Connection(NewSlider.InputBegan, function(input)
			if input.UserInputType == Enum.UserInputType.MouseButton1 then
				Sliding = true
				Slide(input)
			end
		end)
		Library:Connection(NewSlider.InputEnded, function(input)
			if input.UserInputType == Enum.UserInputType.MouseButton1 then
				Sliding = false
			end
		end)
		Library:Connection(Accent.InputBegan, function(input)
			if input.UserInputType == Enum.UserInputType.MouseButton1 then
				Sliding = true
				Slide(input)
			end
		end)
		Library:Connection(Accent.InputEnded, function(input)
			if input.UserInputType == Enum.UserInputType.MouseButton1 then
				Sliding = false
			end
		end)
		Library:Connection(userinput.InputChanged, function(input)
			if input.UserInputType == Enum.UserInputType.MouseMovement then
				if Sliding then
					Slide(input)
				end
			end
		end)
		Library:Connection(NewSlider.MouseEnter, function()
			Library:TweenProperty(Title, "TextColor3", Library.Accent, 0.2)
		end)
		--
		Library:Connection(NewSlider.MouseLeave, function()
			Library:TweenProperty(Title, "TextColor3", Color3.new(0.5686, 0.5686, 0.5686), 0.2)
		end)
		--
		Library:Connection(Subtract.MouseButton1Down, function()
			Set(Val - Slider.Decimals)
		end)
		Library:Connection(Value.FocusLost, function()
			if tonumber(Value.Text) then
				Set(Value.Text)
			else
				Set(Library.Flags[Slider.Flag])
			end
		end)
		--
		Library:Connection(Add.MouseButton1Down, function()
			Set(Val + Slider.Decimals)
		end)
		--
		function Slider:Set(Value)
			Set(Value)
		end
		--
		function Slider:SetVisible(Bool)
			NewSlider.Visible = Bool
		end 
		--
		Flags[Slider.Flag] = Set
		Library.Flags[Slider.Flag] = Slider.State
		Set(Slider.State)

		-- // Returning
		return Slider
	end
	--
	function Sections:Dropdown(Properties)
		local Properties = Properties or {};
		local Dropdown = {
			Window = self.Window,
			Page = self.Page,
			Section = self,
			Open = false,
			Name = Properties.Name or Properties.name or nil,
			Options = (Properties.options or Properties.Options or Properties.values or Properties.Values or {
				"1",
				"2",
				"3",
			}),
			Max = (Properties.Max or Properties.max or nil),
			State = (
				Properties.state
					or Properties.State
					or Properties.def
					or Properties.Def
					or Properties.default
					or Properties.Default
					or nil
			),
			Callback = (
				Properties.callback
					or Properties.Callback
					or Properties.callBack
					or Properties.CallBack
					or function()
			end
			),
			Flag = (
				Properties.flag
					or Properties.Flag
					or Properties.pointer
					or Properties.Pointer
					or Library.NextFlag()
			),
			OptionInsts = {},
		}
		--
		local NewDrop = Library:Create('Frame', {
			Parent = Dropdown.Section.Elements.SectionContent,
			Size = UDim2.new(1.12, 0, 0, 30),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0)
		})
		local Outline = Library:Create('TextButton', {
			Parent = NewDrop,
			Position = UDim2.new(0, 0, 1, 1),
			Size = UDim2.new(1, -30, 0, 17),
			BackgroundColor3 = "OutlineColor",
			BorderColor3 = Color3.new(0.0392, 0.0392, 0.0392),
			AnchorPoint = NewVector2(0, 1),
			Text = "",
			AutoButtonColor = false
		})
		local Inline = Library:Create('Frame', {
			Parent = Outline,
			Position = UDim2.new(0, 1, 0, 1),
			Size = UDim2.new(1, -2, 1, -2),
			BackgroundColor3 = "MainColor",
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0)
		})
		local Value = Library:Create('TextLabel', {
			Parent = Inline,
			Position = UDim2.new(0, 4, 0, 0),
			Size = UDim2.new(1, -30, 1, 0),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			TextColor3 = "FontColor",
			FontFace = Library.Font,
			Text = "",
			TextSize = Library.FontSize,
			TextXAlignment = Enum.TextXAlignment.Left,
			TextStrokeTransparency = 0,
			TextWrapped = true
		})
		local Icon = Library:Create('TextLabel', {
			Parent = Inline,
			Position = UDim2.new(0, -5, 0, 0),
			Size = UDim2.new(1, 0, 1, 0),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			Text = "+",
			TextColor3 = Color3.new(0.5686, 0.5686, 0.5686),
			FontFace = Library.Font,
			TextSize = Library.FontSize,
			TextXAlignment = Enum.TextXAlignment.Right,
			TextStrokeTransparency = 0
		})
		local Title = Library:Create('TextLabel', {
			Parent = NewDrop,
			Position = UDim2.new(0, 0, 0, 0),
			Size = UDim2.new(1, 0, 0, 10),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			TextColor3 = Color3.new(0.5686, 0.5686, 0.5686),
			FontFace = Library.Font,
			TextSize = Library.FontSize,
			TextXAlignment = Enum.TextXAlignment.Left,
			TextStrokeTransparency = 0,
			Text = Dropdown.Name
		})
		local ContainerOutline = Library:Create('Frame', {
			Parent = NewDrop,
			Position = UDim2.new(0, 0, 1, 2),
			Size = UDim2.new(1, -30, 0, 0),
			BackgroundColor3 = "OutlineColor",
			BorderColor3 = Color3.new(0.0392, 0.0392, 0.0392),
			ZIndex = 5,
			Visible = false
		})
		local ContainerInline = Library:Create('ScrollingFrame', {
			Parent = ContainerOutline,
			ScrollingDirection = Enum.ScrollingDirection.Y,
			ScrollBarThickness = 3,
			CanvasSize = UDim2.new(0, 0, 0, 0),
			ScrollBarImageColor3 = "Accent",
			AutomaticCanvasSize = Enum.AutomaticSize.Y,
			Position = UDim2.new(0, 1, 0, 1),
			Size = UDim2.new(1, -2, 1, -2),
			BackgroundColor3 = "MainColor",
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			ZIndex = 6;
		})
		Library:Create('UIListLayout', {
			Parent = ContainerInline,
			SortOrder = Enum.SortOrder.LayoutOrder,
		})
		local sizesaved
		-- // Connections
		Library:Connection(Outline.MouseButton1Down, function()
			if not ContainerOutline.Visible then
				ContainerOutline.Visible = true
				Library:TweenProperty(ContainerOutline, "Size", sizesaved, 0.25)
				NewDrop.ZIndex = 2
				Icon.Text = "-"
			else
				Library:TweenProperty(ContainerOutline, "Size", UDim2.new(1, -30, 0, 0), 0.25)
				NewDrop.ZIndex = 1
				Icon.Text = "+"
				task.wait(0.25)
				ContainerOutline.Visible = false
			end
		end)
		Library:Connection(userinput.InputBegan, function(Input)
			if ContainerOutline.Visible and Input.UserInputType == Enum.UserInputType.MouseButton1 then
				if not Library:IsMouseOverFrame(ContainerOutline) and not Library:IsMouseOverFrame(NewDrop) then
					Library:TweenProperty(ContainerOutline, "Size", UDim2.new(1, -30, 0, 0), 0.25)
					NewDrop.ZIndex = 1
					Icon.Text = "+"
					task.wait(0.25)
					ContainerOutline.Visible = false
				end
			end
		end)
		Library:Connection(NewDrop.MouseEnter, function()
			Library:TweenProperty(Outline, "BorderColor3", Library.Accent, 0.2)
			Library:TweenProperty(Title, "TextColor3", Library.Accent, 0.2)
		end)
		
		Library:Connection(NewDrop.MouseLeave, function()
			Library:TweenProperty(Outline, "BorderColor3", Color3.new(0.0392, 0.0392, 0.0392), 0.2)
			Library:TweenProperty(Title, "TextColor3", Color3.new(0.5686, 0.5686, 0.5686), 0.2)
		end)
		--
		local chosen = Dropdown.Max and {} or nil
		--
		local function handleoptionclick(option, button, text)
			Library:Connection(button.MouseButton1Down, function()
				if Dropdown.Max and Dropdown.Max > 1 then
					if table.find(chosen, option) then
						table.remove(chosen, table.find(chosen, option))
						local textchosen = {}
						local cutobject = false
						for _, opt in next, chosen do
							table.insert(textchosen, opt)
						end
						Value.Text = #chosen == 0 and "" or table.concat(textchosen, ",") .. (cutobject and ", ..." or "")
						Library:TweenProperty(text, "TextColor3", Color3.fromRGB(145, 145, 145), 0.2)
						Library.Flags[Dropdown.Flag] = chosen
						Dropdown.Callback(chosen)
					else
						if #chosen == Dropdown.Max then
							Library:TweenProperty(Dropdown.OptionInsts[chosen[1]].text, "TextColor3", Color3.fromRGB(145, 145, 145), 0.2)
							table.remove(chosen, 1)
						end
						table.insert(chosen, option)
						local textchosen = {}
						local cutobject = false
						for _, opt in next, chosen do
							table.insert(textchosen, opt)
						end
						Value.Text = #chosen == 0 and "" or table.concat(textchosen, ",") .. (cutobject and ", ..." or "")
						Library:TweenProperty(text, "TextColor3", Color3.new(1, 1, 1), 0.2)
						Library.Flags[Dropdown.Flag] = chosen
						Dropdown.Callback(chosen)
					end
				else
					if chosen == option then
						chosen = nil
						Value.Text = ""
						Library:TweenProperty(text, "TextColor3", Color3.fromRGB(145, 145, 145), 0.2)
					else
						for _, tbl in next, Dropdown.OptionInsts do
							Library:TweenProperty(tbl.text, "TextColor3", Color3.fromRGB(145, 145, 145), 0.2)
						end
						chosen = option
						Value.Text = option
						Library:TweenProperty(text, "TextColor3", Color3.new(1, 1, 1), 0.2)
					end
		
					Library.Flags[Dropdown.Flag] = chosen
					Dropdown.Callback(chosen)
				end
			end)
		end
		--
		local function createoptions(tbl)
			for _, option in next, tbl do
				Dropdown.OptionInsts[option] = {}
				local NewOption = Library:Create('TextButton', {
					Parent = ContainerInline,
					Size = UDim2.new(1, 0, 0, 15),
					BackgroundColor3 = Color3.new(1, 1, 1),
					BackgroundTransparency = 1,
					BorderSizePixel = 0,
					BorderColor3 = Color3.new(0, 0, 0),
					Text = "",
					TextColor3 = Color3.new(0, 0, 0),
					AutoButtonColor = false,
					FontFace = Library.Font,
					TextSize = 14,
					ZIndex = 7;
				})
				local OptionName = Library:Create('TextLabel', {
					Parent = NewOption,
					Position = UDim2.new(0, 2, 0, 0),
					Size = UDim2.new(1, 0, 1, 0),
					BackgroundColor3 = Color3.new(1, 1, 1),
					BackgroundTransparency = 1,
					BorderSizePixel = 0,
					BorderColor3 = Color3.new(0, 0, 0),
					Text = option,
					TextColor3 = Color3.new(0.5686, 0.5686, 0.5686),
					FontFace = Library.Font,
					TextSize = Library.FontSize,
					TextXAlignment = Enum.TextXAlignment.Left,
					TextStrokeTransparency = 0,
					ZIndex = 8;
				})
				--
				if #tbl ~= 0 then
					local typeshit = #tbl * 15.5
					sizesaved = UDim2.new(1, -30, 0, math.clamp(typeshit, 0, 155))
				end
				Dropdown.OptionInsts[option].button = NewOption
				Dropdown.OptionInsts[option].text = OptionName
				handleoptionclick(option, NewOption, OptionName)
			end
		end
		createoptions(Dropdown.Options)
		--
		local set
		set = function(option)
			if Dropdown.Max and Dropdown.Max > 1 then
				table.clear(chosen)
				option = type(option) == "table" and option or {}
				for opt, tbl in next, Dropdown.OptionInsts do
					if not table.find(option, opt) then
						Library:TweenProperty(tbl.text, "TextColor3", Color3.fromRGB(145, 145, 145), 0.2)
					end
				end
				for _, opt in next, option do
					if table.find(Dropdown.Options, opt) and #chosen < Dropdown.Max then
						table.insert(chosen, opt)
						Library:TweenProperty(Dropdown.OptionInsts[opt].text, "TextColor3", Color3.new(1, 1, 1), 0.2)
					end
				end
				local textchosen = {}
				local cutobject = false
				for _, opt in next, chosen do
					table.insert(textchosen, opt)
				end
				Value.Text = #chosen == 0 and "" or table.concat(textchosen, ",") .. (cutobject and ", ..." or "")
				Library.Flags[Dropdown.Flag] = chosen
				Dropdown.Callback(chosen)
			end
		end
		--
		function Dropdown:Set(option)
			if Dropdown.Max and Dropdown.Max > 1 then
				set(option)
			else
				for opt, tbl in next, Dropdown.OptionInsts do
					if opt ~= option then
						Library:TweenProperty(tbl.text, "TextColor3", Color3.fromRGB(145, 145, 145), 0.2)
					end
				end
				if option then
					if typeof(option) == "table" then
						option = option[1]
					end
					chosen = option
					Value.Text = option
					if table.find(Dropdown.Options, option) then
						Library:TweenProperty(Dropdown.OptionInsts[option].text, "TextColor3", Color3.fromRGB(255, 255, 255), 0.2)
					end
					Library.Flags[Dropdown.Flag] = chosen
					Dropdown.Callback(chosen)
				else
					chosen = nil
					Value.Text = ""
					Library.Flags[Dropdown.Flag] = chosen
					Dropdown.Callback(chosen)
				end
			end
		end
		--
		function Dropdown:Refresh(tbl)
			for _, opt in next, Dropdown.OptionInsts do
				coroutine.wrap(function()
					opt.button:Destroy()
				end)()
			end
			table.clear(Dropdown.OptionInsts)
			createoptions(tbl)
			if Dropdown.Max and Dropdown.Max > 1 then
				table.clear(chosen)
			else
				chosen = nil
			end
			Library.Flags[Dropdown.Flag] = chosen
			Dropdown.Callback(chosen)
		end

		-- // Returning
		if Dropdown.Max and Dropdown.Max > 1 then
			Flags[Dropdown.Flag] = set
		else
			Flags[Dropdown.Flag] = Dropdown
		end
		if (Dropdown.Max and Dropdown.Max > 1) or typeof(Dropdown.State) == "string" then
			Dropdown:Set(Dropdown.State)
		elseif typeof(Dropdown.State) == "table" then
			Dropdown:Set(Dropdown.State[1])
		end
		function Dropdown:SetVisible(Bool)
			NewDrop.Visible = Bool
		end
		return Dropdown
	end
	--
	function Sections:Keybind(Properties)
		local Properties = Properties or {}
		local Keybind = {
			Section = self,
			Name = Properties.name or Properties.Name or "Keybind",
			State = (
				Properties.state
					or Properties.State
					or Properties.def
					or Properties.Def
					or Properties.default
					or Properties.Default
					or nil
			),
			Mode = (Properties.mode or Properties.Mode or "Toggle"),
			UseKey = (Properties.UseKey or false),
			Ignore = (Properties.ignore or Properties.Ignore or false),
			Callback = (
				Properties.callback
					or Properties.Callback
					or Properties.callBack
					or Properties.CallBack
					or function()
			end
			),
			Flag = (
				Properties.flag
					or Properties.Flag
					or Properties.pointer
					or Properties.Pointer
					or Library.NextFlag()
			),
			Binding = nil,
		}
		local Key
		local State = false
		--
		local NewKey = Library:Create('Frame', {
			Parent = Keybind.Section.Elements.SectionContent,
			Size = UDim2.new(1, 0, 0, 12),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0)
		})
		local Outline = Library:Create('TextButton', {
			Parent = NewKey,
			Position = UDim2.new(1, 0, 0.5, 0),
			Size = UDim2.new(0, 40, 0, 12),
			BackgroundColor3 = "OutlineColor",
			BorderColor3 = Color3.new(0.0392, 0.0392, 0.0392),
			AnchorPoint = NewVector2(1, 0.5),
			Text = "",
			AutoButtonColor = false
		})
		local Inline = Library:Create('Frame', {
			Parent = Outline,
			Position = UDim2.new(0, 1, 0, 1),
			Size = UDim2.new(1, -2, 1, -2),
			BackgroundColor3 = "MainColor",
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0)
		})
		local Value = Library:Create('TextLabel', {
			Parent = Inline,
			Size = UDim2.new(1, 0, 1, 0),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			Text = "",
			TextColor3 = "FontColor",
			FontFace = Library.Font,
			TextSize = Library.FontSize,
			TextStrokeTransparency = 0
		})
		local Title = Library:Create('TextLabel', {
			Parent = NewKey,
			Position = UDim2.new(0, 15, 0, 0),
			Size = UDim2.new(1, 0, 0, 10),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,	
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			TextColor3 = Color3.new(0.5686, 0.5686, 0.5686),
			FontFace = Library.Font,
			TextSize = Library.FontSize,
			TextXAlignment = Enum.TextXAlignment.Left,
			Text = Keybind.Name,
			TextStrokeTransparency = 0
		})
		local ModeOutline = Library:Create('Frame', {
			Parent = NewKey,
			Position = UDim2.new(1, 65, 0.5, 0),
			Size = UDim2.new(0, 60, 0, 12),
			BackgroundColor3 = "OutlineColor",
			BorderColor3 = Color3.new(0.0392, 0.0392, 0.0392),
			AnchorPoint = NewVector2(1, 0.5),
			AutomaticSize = Enum.AutomaticSize.Y,
			Rotation = 0.00001,
			Visible = false,
			ZIndex = 1020000010
		})
		local ModeInline = Library:Create('Frame', {
			Parent = ModeOutline,
			Position = UDim2.new(0, 1, 0, 1),
			Size = UDim2.new(1, -2, 1, -2),
			BackgroundColor3 = "MainColor",
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			ZIndex = 1020000010
		})
		Library:Create('UIListLayout', {
			Parent = ModeInline,
			SortOrder = Enum.SortOrder.LayoutOrder
		})
		local Hold = Library:Create('TextButton', {
			Parent = ModeInline,
			Size = UDim2.new(1, 0, 0, 15),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			Text = "Hold",
			TextColor3 = Keybind.Mode == "Hold" and Color3.new(1, 1, 1) or Color3.new(0.5686, 0.5686, 0.5686),
			AutoButtonColor = false,
			FontFace = Library.Font,
			TextSize = Library.FontSize,
			TextStrokeTransparency = 0,
			ZIndex = 1020000010
		})
		local Toggle = Library:Create('TextButton', {
			Parent = ModeInline,
			Size = UDim2.new(1, 0, 0, 15),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			Text = "Toggle",
			TextColor3 = Keybind.Mode == "Toggle" and Color3.new(1, 1, 1) or Color3.new(0.5686, 0.5686, 0.5686),
			AutoButtonColor = false,
			FontFace = Library.Font,
			TextSize = Library.FontSize,
			TextStrokeTransparency = 0,
			ZIndex = 1020000010
		})
		local Always = Library:Create('TextButton', {
			Parent = ModeInline,
			Size = UDim2.new(1, 0, 0, 15),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			Text = "Always",
			TextColor3 = Keybind.Mode == "Always" and Color3.new(1, 1, 1) or Color3.new(0.5686, 0.5686, 0.5686),
			AutoButtonColor = false,
			FontFace = Library.Font,
			TextSize = Library.FontSize,
			TextStrokeTransparency = 0,
			ZIndex = 1020000010
		})
		local ListValue = Library.KeyList:NewKey(tostring(Keybind.State):gsub("Enum.KeyCode.", ""), Keybind.Name, Keybind.Mode)
		local c
		-- // Functions
		local function set(newkey)
			local modetable = {
				"Toggle",
				"Always",
				"Hold"
			}
			if string.find(tostring(newkey), "Enum") then
				if c then
					c:Disconnect()
					if Keybind.Flag then
						Library.Flags[Keybind.Flag] = false
					end
					Keybind.Callback(false)
				end
				if tostring(newkey):find("Enum.KeyCode.") then
					newkey = Enum.KeyCode[tostring(newkey):gsub("Enum.KeyCode.", "")]
				elseif tostring(newkey):find("Enum.UserInputType.") then
					newkey = Enum.UserInputType[tostring(newkey):gsub("Enum.UserInputType.", "")]
				end
				if newkey == Enum.KeyCode.Backspace or newkey == Enum.KeyCode.Escape then
					Key = nil
					if Keybind.UseKey then
						if Keybind.Flag then
							Library.Flags[Keybind.Flag] = Key
						end
						Keybind.Callback(Key)
					end
					local text = ""
					Value.Text = text
					ListValue:Update(text, Keybind.Name, Keybind.Mode)
					ListValue:SetVisible(false)
				elseif newkey ~= nil then
					Key = newkey
					if Keybind.UseKey then
						if Keybind.Flag then
							Library.Flags[Keybind.Flag] = Key
						end
						Keybind.Callback(Key)
					end
					local text = (Library.Keys[newkey] or tostring(newkey):gsub("Enum.KeyCode.", ""))
					Value.Text = text
					ListValue:Update(text, Keybind.Name, Keybind.Mode)
					if Keybind.Name == "UI Toggle" then
						ListValue:SetColorBlue(true)
					end
				end
				Library.Flags[Keybind.Flag .. "_KEY"] = newkey
			elseif table.find(modetable, newkey) then
				if not Keybind.UseKey then
					Library.Flags[Keybind.Flag .. "_KEY STATE"] = newkey
					Keybind.Mode = newkey
					if Keybind.Mode == "Toggle" then
						Library:AddToThemeObjects(Toggle, {
							TextColor3 = "FontColor"
						})
						Library:RemoveFromThemeObjects(Hold)
						Library:RemoveFromThemeObjects(Always)
						Library:TweenProperty(Toggle, "TextColor3", Library.FontColor, 0.2)
						Library:TweenProperty(Hold, "TextColor3", Color3.fromRGB(145, 145, 145), 0.2)
						Library:TweenProperty(Always, "TextColor3", Color3.fromRGB(145, 145, 145), 0.2)
					elseif Keybind.Mode == "Hold" then
						Library:AddToThemeObjects(Hold, {
							TextColor3 = "FontColor"
						})
						Library:RemoveFromThemeObjects(Toggle)
						Library:RemoveFromThemeObjects(Always)
						Library:TweenProperty(Toggle, "TextColor3", Color3.fromRGB(145, 145, 145), 0.2)
						Library:TweenProperty(Hold, "TextColor3", Library.FontColor, 0.2)
						Library:TweenProperty(Always, "TextColor3", Color3.fromRGB(145, 145, 145), 0.2)
					elseif Keybind.Mode == "Always" then
						State = true
						ListValue:SetColorBlue()
						if Keybind.Flag then
							Library.Flags[Keybind.Flag] = State
						end
						Keybind.Callback(true)
						Library:AddToThemeObjects(Always, {
							TextColor3 = "FontColor"
						})
						Library:RemoveFromThemeObjects(Toggle)
						Library:RemoveFromThemeObjects(Hold)
						Library:TweenProperty(Toggle, "TextColor3", Color3.fromRGB(145, 145, 145), 0.2)
						Library:TweenProperty(Hold, "TextColor3", Color3.fromRGB(145, 145, 145), 0.2)
						Library:TweenProperty(Always, "TextColor3", Library.FontColor, 0.2)
					end
					if Key ~= nil then
						ListValue:Update((Library.Keys[Key] or tostring(Key):gsub("Enum.KeyCode.", "")), Keybind.Name, Keybind.Mode)
					end
				end
			else
				State = newkey
				if Keybind.Flag then
					Library.Flags[Keybind.Flag] = newkey
				end
				Keybind.Callback(newkey)
			end
		end
		--
		set(Keybind.State)
		set(Keybind.Mode)
		Library:Connection(Outline.MouseButton1Click, function()
			if not Keybind.Binding then
				Value.Text = "..."
				Keybind.Binding = Library:Connection(userinput.InputBegan, function(input)
					set(input.UserInputType == Enum.UserInputType.Keyboard and input.KeyCode or input.UserInputType)
					Library:Disconnect(Keybind.Binding)
					task.wait()
					Keybind.Binding = nil
				end
				)
			end
		end)
		--

		Library:Connection(userinput.InputBegan, function(inp)
			if not userinput:GetFocusedTextBox() then
				if (inp.KeyCode == Key or inp.UserInputType == Key) and not Keybind.Binding and not Keybind.UseKey then
					if Keybind.Mode == "Hold" then
						ListValue:SetColorBlue(true)
						if Keybind.Flag then
							Library.Flags[Keybind.Flag] = true
						end
						c = Library:Connection(runserv.RenderStepped, function()
							if Keybind.Callback then
								Keybind.Callback(true)
							end
						end)
					elseif Keybind.Mode == "Toggle" then
						State = not State
						if Keybind.Flag then
							Library.Flags[Keybind.Flag] = State
						end
						Keybind.Callback(State)
						ListValue:SetColorBlue()
					end
				end
			end
		end)
		--
		Library:Connection(userinput.InputEnded, function(inp)
			if not userinput:GetFocusedTextBox() then
				if Keybind.Mode == "Hold" and not Keybind.UseKey then
					if Key ~= "" or Key ~= nil then
						if inp.KeyCode == Key or inp.UserInputType == Key then
							if c then
								ListValue:SetColorBlue(false)
								c:Disconnect()
								if Keybind.Flag then
									Library.Flags[Keybind.Flag] = false
								end
								if Keybind.Callback then
									Keybind.Callback(false)
								end
							end
						end
					end
				end
			end
		end)
		Library:Connection(Outline.MouseEnter, function()
			Library:TweenProperty(Outline, "BorderColor3", Library.Accent, 0.2)
		end)
		--
		Library:Connection(Outline.MouseLeave, function()
			Library:TweenProperty(Outline, "BorderColor3", Color3.new(0.0392, 0.0392, 0.0392), 0.2)
		end)
		--
		Library:Connection(Outline.MouseButton2Down, function()
			Library:ManageTransparency(ModeOutline, "ModeOutline3", 0.2, ModeOutline.Visible)
		end)
		--
		Library:Connection(NewKey.MouseEnter, function()
			Library:TweenProperty(Title, "TextColor3", Library.Accent, 0.2)
		end)
		
		Library:Connection(NewKey.MouseLeave, function()
			Library:TweenProperty(Title, "TextColor3", Color3.new(0.5686, 0.5686, 0.5686), 0.2)
		end)		
		--
		Library:Connection(Hold.MouseButton1Down, function()
			set("Hold")

		end)
		--
		Library:Connection(Toggle.MouseButton1Down, function()
			set("Toggle")
		end)
		--
		Library:Connection(Always.MouseButton1Down, function()
			set("Always")
		end)
		--
		Library:Connection(userinput.InputBegan, function(Input)
			if ModeOutline.Visible and Input.UserInputType == Enum.UserInputType.MouseButton1 then
				if not Library:IsMouseOverFrame(ModeOutline) then
					Library:ManageTransparency(ModeOutline, "ModeOutline3", 0.2, ModeOutline.Visible)
				end
			end
		end)
		--
		Library.Flags[Keybind.Flag .. "_KEY"] = Keybind.State
		Library.Flags[Keybind.Flag .. "_KEY STATE"] = Keybind.Mode
		Flags[Keybind.Flag] = set
		Flags[Keybind.Flag .. "_KEY"] = set
		Flags[Keybind.Flag .. "_KEY STATE"] = set
		--
		function Keybind:Set(key)
			set(key)
		end
		-- // Returning
		return Keybind
	end
	--
	function Sections:Colorpicker(Properties)
		local Properties = Properties or {}
		local Colorpicker = {
			Window = self.Window,
			Page = self.Page,
			Section = self,
			Name = (Properties.Name or "Colorpicker"),
			State = (
				Properties.state
					or Properties.State
					or Properties.def
					or Properties.Def
					or Properties.default
					or Properties.Default
					or Color3.fromRGB(255, 0, 0)
			),
			Callback = (
				Properties.callback
					or Properties.Callback
					or Properties.callBack
					or Properties.CallBack
					or function()
			end
			),
			Flag = (
				Properties.flag
					or Properties.Flag
					or Properties.pointer
					or Properties.Pointer
					or Library.NextFlag()
			),
			Colorpickers = 0,
		}
		--
		local NewToggle = Library:Create('Frame', {
			Parent = Colorpicker.Section.Elements.SectionContent,
			Size = UDim2.new(1, 0, 0, 10),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0)
		})
		local TextLabel = Library:Create('TextLabel', {
			Parent = NewToggle,
			Position = UDim2.new(0, 15, 0, 0),
			Size = UDim2.new(0, 100, 1, 0),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			Text = Colorpicker.Name,
			TextColor3 = Color3.fromRGB(145, 145, 145),
			FontFace = Library.Font,
			TextSize = Library.FontSize,
			TextXAlignment = Enum.TextXAlignment.Left,
			TextStrokeTransparency = 0
		})
		--
		Library:Connection(NewToggle.MouseEnter, function()
			Library:TweenProperty(TextLabel, "TextColor3", Library.Accent, 0.2)
		end)
		
		Library:Connection(NewToggle.MouseLeave, function()
			Library:TweenProperty(TextLabel, "TextColor3", Color3.new(0.5686, 0.5686, 0.5686), 0.2)
		end)		

		-- // Functions
		Colorpicker.Colorpickers = Colorpicker.Colorpickers + 1
		local colorpickertypes = Library:NewPicker(
			Colorpicker.State,
			NewToggle,
			Colorpicker.Colorpickers - 1,
			Colorpicker.Flag,
			Colorpicker.Callback
		)
		function Colorpicker:Set(color)
			colorpickertypes:set(color)
		end

		-- // Returning
		return Colorpicker
	end
	--
	function Sections:Textbox(Properties)
		local Properties = Properties or {}
		local Textbox = {
			Window = self.Window,
			Page = self.Page,
			Section = self,
			Name = (Properties.Name or Properties.name or "textbox"),
			Placeholder = (
				Properties.placeholder
				or Properties.Placeholder
				or Properties.holder
				or Properties.Holder
				or ""
			),
			State = (
				Properties.state
				or Properties.State
				or Properties.def
				or Properties.Def
				or Properties.default
				or Properties.Default
				or ""
			),
			Callback = (
				Properties.callback
				or Properties.Callback
				or Properties.callBack
				or Properties.CallBack
				or function()
			end
			),
			Flag = (
				Properties.flag
				or Properties.Flag
				or Properties.pointer
				or Properties.Pointer
				or Library.NextFlag()
			),
		}
		--
		local NewDrop = Library:Create('Frame', {
			Parent = Textbox.Section.Elements.SectionContent,
			Size = UDim2.new(1.12, 0, 0, 30),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0)
		})
		local Outline = Library:Create('TextButton', {
			Parent = NewDrop,
			Position = UDim2.new(0, 0, 1, 1),
			Size = UDim2.new(1, -30, 0, 17),
			BackgroundColor3 = "OutlineColor",
			BorderColor3 = Color3.new(0.0392, 0.0392, 0.0392),
			AnchorPoint = NewVector2(0, 1),
			Text = "",
			AutoButtonColor = false
		})
		local Inline = Library:Create('Frame', {
			Parent = Outline,
			Position = UDim2.new(0, 1, 0, 1),
			Size = UDim2.new(1, -2, 1, -2),
			BackgroundColor3 = "MainColor",
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0)
		})
		local Value = Library:Create('TextBox', {
			Parent = Inline,
			Position = UDim2.new(0, 4, 0, 0),
			Size = UDim2.new(1, 0, 1, 0),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			TextColor3 = "FontColor",
			FontFace = Library.Font,
			TextSize = Library.FontSize,
			TextXAlignment = Enum.TextXAlignment.Left,
			TextStrokeTransparency = 0,
			TextWrapped = true,
			Text = Textbox.State,
			ClearTextOnFocus = false
		})
		local Title = Library:Create('TextLabel', {
			Parent = NewDrop,
			Position = UDim2.new(0, 0, 0, 0),
			Size = UDim2.new(1, 0, 0, 10),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			TextColor3 = Color3.new(0.5686, 0.5686, 0.5686),
			FontFace = Library.Font,
			TextSize = Library.FontSize,
			TextXAlignment = Enum.TextXAlignment.Left,
			TextStrokeTransparency = 0,
			Text = Textbox.Name
		})
	
		-- // Connections
		Library:Connection(NewDrop.MouseEnter, function()
			Library:TweenProperty(Outline, "BorderColor3", Library.Accent, 0.2)
			Library:TweenProperty(Title, "TextColor3", Library.Accent, 0.2)
		end)
		
		Library:Connection(NewDrop.MouseLeave, function()
			Library:TweenProperty(Outline, "BorderColor3", Color3.new(0.0392, 0.0392, 0.0392), 0.2)
			Library:TweenProperty(Title, "TextColor3", Color3.new(0.5686, 0.5686, 0.5686), 0.2)
		end)
		
		Library:Connection(Value.FocusLost, function()
			Library.Flags[Textbox.Flag] = Value.Text
			Textbox.Callback(Value.Text)
		end)
		--
		function Textbox:set(str)
			Value.Text = str
			Library.Flags[Textbox.Flag] = str
			Textbox.Callback(str)
		end
	
		-- // Return
		Flags[Textbox.Flag] = function(value)
			Textbox:set(value)
		end
		return Textbox
	end    
	--
	function Sections:Button(Properties)
		local Properties = Properties or {}
		local Button = {
			Window = self.Window,
			Page = self.Page,
			Section = self,
			Name = Properties.Name or "button",
			Callback = (
				Properties.callback
					or Properties.Callback
					or Properties.callBack
					or Properties.CallBack
					or function()
			end
			),
		}
		--
		local NewButton = Library:Create('TextButton', {
			Parent = Button.Section.Elements.SectionContent,
			Size = UDim2.new(1.12, 0, 0, 14),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			Text = "",
			TextColor3 = Color3.new(0, 0, 0),
			AutoButtonColor = false,
			FontFace = Library.Font,
			TextSize = 14
		})
		local Outline = Library:Create('Frame', {
			Parent = NewButton,
			Position = UDim2.new(0, 0, 1, 1),
			Size = UDim2.new(1, -30, 0, 17),
			BackgroundColor3 = "OutlineColor",
			BorderColor3 = Color3.new(0.0392, 0.0392, 0.0392),
			AnchorPoint = NewVector2(0, 1)
		})
		local Inline = Library:Create('Frame', {
			Parent = Outline,
			Position = UDim2.new(0, 1, 0, 1),
			Size = UDim2.new(1, -2, 1, -2),
			BackgroundColor3 = "MainColor",
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0)
		})
		local Value = Library:Create('TextLabel', {
			Parent = Inline,
			Position = UDim2.new(0, 4, 0, 0),
			Size = UDim2.new(1, 0, 1, 0),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			TextColor3 = Color3.new(0.5686, 0.5686, 0.5686),
			FontFace = Library.Font,
			TextSize = Library.FontSize,
			Text = Button.Name,
			TextStrokeTransparency = 0
		})
		Library:Connection(NewButton.MouseEnter, function()
			Library:TweenProperty(Outline, "BorderColor3", Library.Accent, 0.2)
			Library:TweenProperty(Value, "TextColor3", Library.Accent, 0.2)
		end)
		
		Library:Connection(NewButton.MouseLeave, function()
			Library:TweenProperty(Outline, "BorderColor3", Color3.new(0.0392, 0.0392, 0.0392), 0.2)
			Library:TweenProperty(Value, "TextColor3", Color3.new(0.5686, 0.5686, 0.5686), 0.2)
		end)		
		--
		Library:Connection(NewButton.MouseButton1Down, function()
			Library:TweenProperty(Outline, "BorderColor3", Color3.new(0.0392, 0.0392, 0.0392), 0.2)
			Library:TweenProperty(Value, "TextColor3", Color3.new(0.5686, 0.5686, 0.5686), 0.2)
			Button.Callback()
		end)
		--
		Library:Connection(NewButton.MouseButton1Up, function()
			Library:TweenProperty(Value, "TextColor3", Color3.new(0.5686, 0.5686, 0.5686), 0.2)
		end)
	end
	--
	function Sections:Label(Properties)
		local Properties = Properties or {}
		local Label = {
			Window = self.Window,
			Page = self.Page,
			Section = self,
			Name = Properties.Name or "label",
			Centered = Properties.Centered or false,
		}
		local NewButton = Library:Create('TextLabel', {
			Parent = Label.Section.Elements.SectionContent,
			Size = UDim2.new(1, 0, 0, 12),
			BackgroundColor3 = Color3.new(1, 1, 1),
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			BorderColor3 = Color3.new(0, 0, 0),
			Text = Label.Name,
			TextColor3 = "FontColor",
			FontFace = Library.Font,
			TextSize = Library.FontSize,
			TextXAlignment = Label.Centered and Enum.TextXAlignment.Center or Enum.TextXAlignment.Left,
			TextStrokeTransparency = 0,
			TextStrokeColor3 = Color3.new(0, 0, 0)
		})
		--
		function Label:SetText(NewText)
			self.Name = NewText
			NewButton.Text = NewText
		end
		return Label
	end
	return Library
end
