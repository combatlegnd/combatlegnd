local localPlayer = game.Players.LocalPlayer
local character
local humanoid
 
local function characterAdded(newCharacter)
	character = newCharacter
	humanoid = newCharacter:WaitForChild("Humanoid")
end
 
if localPlayer.Character then
	characterAdded(localPlayer.Character)
end
 
localPlayer.CharacterAdded:connect(characterAdded)
