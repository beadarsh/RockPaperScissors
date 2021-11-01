using Bal;
using Bal.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace BalTest
{
    [TestClass]
    public class RPSGameTest
    {
        [TestMethod]
        public void ResultForPlayerSelectedOptions_PlayerOneSelectsRockAndPlayerTwoSelectsRock_ResultsInDraw()
        {
            Assert.AreEqual(RPSGameResult.Draw, RPSGame.ResultForPlayerSelectedOptions(RPSGameSelectedOption.Rock, RPSGameSelectedOption.Rock));
        }

        [TestMethod]
        public void ResultForPlayerSelectedOptions_PlayerOneSelectsPaperAndPlayerTwoSelectsPaper_ResultsInDraw()
        {
            Assert.AreEqual(RPSGameResult.Draw, RPSGame.ResultForPlayerSelectedOptions(RPSGameSelectedOption.Paper, RPSGameSelectedOption.Paper));
        }

        [TestMethod]
        public void ResultForPlayerSelectedOptions_PlayerOneSelectsRockAndPlayerTwoSelectsScissors_ResultsInDraw()
        {
            Assert.AreEqual(RPSGameResult.Draw, RPSGame.ResultForPlayerSelectedOptions(RPSGameSelectedOption.Scissors, RPSGameSelectedOption.Scissors));
        }

        [TestMethod]
        public void ResultForPlayerSelectedOptions_PlayerOneSelectsRockAndPlayerTwoSelectsScissors_PlayerOneWins()
        {
            Assert.AreEqual(RPSGameResult.PlayerOne, RPSGame.ResultForPlayerSelectedOptions(RPSGameSelectedOption.Rock, RPSGameSelectedOption.Scissors));
        }

        [TestMethod]
        public void ResultForPlayerSelectedOptions_PlayerOneSelectsScissorsAndPlayerTwoSelectsRock_PlayerTwoWins()
        {
            Assert.AreEqual(RPSGameResult.PlayerTwo, RPSGame.ResultForPlayerSelectedOptions(RPSGameSelectedOption.Scissors, RPSGameSelectedOption.Rock));
        }

        [TestMethod]
        public void ResultForPlayerSelectedOptions_PlayerOneSelectsScissorsAndPlayerTwoSelectsPaper_PlayerOneWins()
        {
            Assert.AreEqual(RPSGameResult.PlayerOne, RPSGame.ResultForPlayerSelectedOptions(RPSGameSelectedOption.Scissors, RPSGameSelectedOption.Paper));
        }

        [TestMethod]
        public void ResultForPlayerSelectedOptions_PlayerOneSelectsPaperAndPlayerTwoSelectsScissors_PlayerTwoWins()
        {
            Assert.AreEqual(RPSGameResult.PlayerTwo, RPSGame.ResultForPlayerSelectedOptions(RPSGameSelectedOption.Paper, RPSGameSelectedOption.Scissors));
        }


        [TestMethod]
        public void ResultForPlayerSelectedOptions_PlayerOneSelectsPaperAndPlayerTwoSelectsRock_PlayerOneWins()
        {
            Assert.AreEqual(RPSGameResult.PlayerOne, RPSGame.ResultForPlayerSelectedOptions(RPSGameSelectedOption.Paper, RPSGameSelectedOption.Rock));
        }

        [TestMethod]
        public void ResultForPlayerSelectedOptions_PlayerOneSelectsRockAndPlayerTwoSelectsPaper_PlayerTwoWins()
        {
            Assert.AreEqual(RPSGameResult.PlayerTwo, RPSGame.ResultForPlayerSelectedOptions(RPSGameSelectedOption.Rock, RPSGameSelectedOption.Paper));
        }
    }
}