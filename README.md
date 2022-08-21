for _, tbl in ipairs(getgc(true)) do
	if typeof(tbl) == "table" and rawget(tbl, "Remote") then
		tbl.Remote.Name = tbl.Name
	end
end
local local_player = game:GetService("Players").LocalPlayer
local kick_hook; kick_hook = hookmetamethod(game, "__namecall", newcclosure(function(...)
	local args = {...}
	local self = args[1]
	local namecall_method = getnamecallmethod()
	if not checkcaller() and self == local_player and namecall_method == "Kick" then
		return
	end
	return kick_hook(...)
end))

local Movement = library:Window("Movement")
local Melee = library:Window("Melee")
local Credits = library:Window("Credits")

local function keydown(key)
	return game:GetService("UserInputService"):IsKeyDown(key)
end

local function GetClosest()
	local Character = game.Players.LocalPlayer.Character
	local HumanoidRootPart = Character and Character:FindFirstChild("HumanoidRootPart")
	if not (Character or HumanoidRootPart) then return end

local function SecureSetProperty(Instance,Property,Value)
    for i,v in pairs(getconnections(Instance:GetPropertyChangedSignal(Property))) do
        v:Disable()
    end
    for i,v in pairs(getconnections(Instance.Changed)) do
        v:Disable()
    end
    if not Instance:FindFirstChild(Property) then
        Instance[Property] = Value
        return Instance:GetPropertyChangedSignal(Property):Connect(function()
            Instance[Property] = Value
        end)
    end
end

local Killaura = false
Melee:Toggle("Kill Aura",false,function(bool)
	Killaura = bool
	if bool == false then return end
	while Killaura do
		for i = 1,3 do
			local target = GetClosest().Character
			local character = game.Players.LocalPlayer.Character
			if character:FindFirstChildOfClass("Tool") and character:FindFirstChildOfClass("Tool"):FindFirstChild("Hitboxes") and target:FindFirstChild("Torso") and (character:FindFirstChildOfClass("Tool").Hitboxes.Hitbox.Position - target.Torso.Position).magnitude <= 10 and target.SemiTransparentShield.Transparency == 1 then
				local tool = character:FindFirstChildOfClass("Tool")
				local targetpart = target.Torso
				local hitbox = tool.Hitboxes.Hitbox
				local pos = tool.Hitboxes.Hitbox.Position --character.HumanoidRootPart.Position
				game:GetService("ReplicatedStorage").Communication.Events.MeleeSwing:FireServer(tool, i)
				game:GetService("ReplicatedStorage").Communication.Events.MeleeDamage:FireServer(tool, targetpart, hitbox, pos, CFrame.new(), Vector3.new(), Vector3.new())
				wait()
			end
		end
		wait(.4)
	end
end)
