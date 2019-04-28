import React, { Component, Fragment } from 'react';

export default class Process extends Component {
  render() {
    return (
      <Fragment>
        <div id="selection" className="process">
          <div className="container-left">
            <h2 className="lato-bold">Processus de selection</h2>
            <h3 className="lato-bold">Comment fonctionne le processus de sélection chez Bluesquare ?</h3>
            <div className="lato">
              <p className="lato-light">Pour candidater pour un poste de développeur, joignez obligatoirement un lien vers un github ou vers le code source d’un projet web vraiment personnel que vous avez réalisé, et dont vous connaissez bien le code source. L’objectif est de réaliser de notre côté un premier filtre et confirmer qu’à première vue, vous avez une très bonne maîtrise d’au moins un framework PHP, et que vous êtes sensible à réaliser de l’intégration graphique de qualité.</p>
              <p className="lato-light">Pas besoin de joindre la lettre de motivation, mettez juste une ou deux phrases vraiment personnalisé dans le corps de mail.</p>
              <p className="lato-light">Si ces critères sont réunis et que votre demande matche les besoins en recrutement et le contexte du moment (, temps, durée, nature…), on essaiera de revenir vers vous très rapidement par téléphone pour discuter de votre projet, présenter Bluesquare et convenir d’un jour pour venir passer un entretien technique dans nos locaux</p>
              <p className="lato-light">Si vous cartonnez à l’entretien technique, c’est génial ! On vous fera très probablement une proposition rapidement !</p>
            </div>
            <h3 className="lato-bold">Le poste pourrait m’intéresser mais je ne suis pas sûr de correspondre à tous les critères, dois-je postuler ?</h3>
            <p className="lato-light">
              Vous ne risquez rien à postuler quand même ! Le seul pré-requis indispensable c’est d’être à l’aise avec un framework PHP ou de pouvoir justifier une montée en compétence très rapide !
            </p>
          </div>
          <div className="container-right">
            <img className="img-right" src={"assets/pictures/background-process.png"} />
            <div className="content">
              <h3 className="lato-bold">En quoi consiste l’entretien technique ?</h3>
              <div className="lato">
                Il y a trois parties :
              <p className="lato-light">Tests d’intégration (HTML / CSS) : le graphisme est important pour tous nos clients. Notre premier tests consistera à vous fournir un screenshot d’un site existant et ce sera à vous de reproduire ce que vous voyez en HTML / CSS</p>
                <p className="lato-light">Tests backend : des tests en PHP (sur le framework de votre choix) vous seront proposés ! C’est un exercice un peu scolaire qui a pour but de s’assurer que vous connaissez au moins un framework PHP sur lequel vous êtes parfaitement à l’aise</p>
                <p className="lato-light">Tests généraux : cyber-sécurité, énigmes, architecture … C’est la partie la plus intéressante ! Et aussi la plus atypique. Plusieurs petits exercices vous seront alors proposés. Venez avez votre matériel informatique configuré (MAMP/LAMP/WAMP selon l’OS, un phpmyadmin ou autre qui fonctionne, …). Vous avez le droit de préparer sur votre machine des bouts de code réutilisable dans les exercices. Pendant le test, vous aurez accès à internet, vous pouvez utiliser toute librairie que vous voulez open-source, bout de code sur Stackoverflow… L’objectif c’est de simuler des conditions de travail.</p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}