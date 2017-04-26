Feature: Search the Web

  As a human
  I want to check Alf Bjørn's CV
  So I can give him an offer he can't refuse

@watch
Scenario: Go to his CV site
  Given I have loaded his site
  Then I see a link to the "career" section
