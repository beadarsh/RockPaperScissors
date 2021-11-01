using Bal;
using Bal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RPS.Controllers
{
    public class GameController : Controller
    {
        // GET: Game
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult FetchResultForPlayerOptions(RPSGameSelectedOption playerOneOption, RPSGameSelectedOption playerTwoOption)
        {
            return Json(RPSGame.ResultForPlayerSelectedOptions(playerOneOption, playerTwoOption), JsonRequestBehavior.AllowGet);
        }
    }
}