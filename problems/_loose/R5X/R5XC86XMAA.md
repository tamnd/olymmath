---
tag: R5XC86XMAA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=1683
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Jesse en Tjeerd spelen een spelletje. Jesse heeft de beschikking over $n \geq 2$ stenen. Er zijn twee dozen: in de zwarte doos is ruimte voor de helft van de stenen (naar beneden afgerond) en in de witte doos is ruimte voor de helft van de stenen (naar boven afgerond). Jesse en Tjeerd zijn om en om aan de beurt, waarbij Jesse begint. Jesse pakt in zijn beurt steeds één nieuwe steen, schrijft een positief reëel getal op de steen en legt hem in één van de dozen die nog niet vol is. Tjeerd ziet al deze getallen op de stenen in de dozen en mag in zijn beurt één steen naar keuze uit een doos verplaatsen naar de andere doos als die nog niet vol is, maar hij mag er ook voor kiezen om niets te doen. Het spel stopt zodra beide dozen vol zijn. Als dan de totale waarde van de stenen in de zwarte doos groter is dan de totale waarde van de stenen in de witte doos, wint Jesse; anders wint Tjeerd. Bepaal voor elke $n \geq 2$ wie er met zekerheid kan winnen (en geef een bijbehorende winnende strategie).
