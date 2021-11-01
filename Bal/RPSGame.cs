using Bal.Models;
using System.Collections.Generic;

namespace Bal
{
    public class RPSGame
    {
        public static RPSGameResult ResultForPlayerSelectedOptions(RPSGameSelectedOption playerOneOption, RPSGameSelectedOption playerTwoOption)
        {
            RPSGameSelectedOption winningOption;
            var winningCombinationsByOption = new Dictionary<RPSGameSelectedOption, RPSGameSelectedOption>() {
                {  RPSGameSelectedOption.Rock, RPSGameSelectedOption.Scissors },
                {  RPSGameSelectedOption.Scissors, RPSGameSelectedOption.Paper },
                {  RPSGameSelectedOption.Paper, RPSGameSelectedOption.Rock }
            };
            if (playerOneOption == playerTwoOption)
                return RPSGameResult.Draw;
            if (winningCombinationsByOption.TryGetValue(playerOneOption, out winningOption) && winningOption == playerTwoOption)
            {
                return RPSGameResult.PlayerOne;
            }
            return RPSGameResult.PlayerTwo;
        }
    }
}
