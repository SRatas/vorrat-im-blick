# Vorrat im Blick

**Version:** 0.19.1  
**Web-App:** [sratas.github.io/vorrat-im-blick](https://sratas.github.io/vorrat-im-blick/)  
**Projektstand:** 18.10.2026

Eine kostenlose Vorratsliste für Gefrierfach und Vorrat. Die App läuft lokal im Browser und benötigt kein Konto.\n\n## Erster Eintrag\n\nTrage ein Lebensmittel mit Menge und Fach ein. Du kannst die Liste später durchsuchen und als CSV sichern, um sie auf einem anderen Gerät wiederherzustellen.

## Benutzung

- Artikel, Menge, Bereich, Datumsnotizen und eigene Notizen eintragen.
- Einträge suchen, bearbeiten, löschen und als „bald verwenden“ markieren.
- Eine CSV-Sicherung herunterladen und CSV- oder Wiederherstellungsdateien wieder einlesen. Beim Import werden neue Einträge ergänzt; bereits vorhandene gleiche Einträge werden übersprungen.
- Die Liste drucken. Nach dem ersten Online-Aufruf lässt sie sich in unterstützten Browsern auch offline öffnen.
- Den App-Link mit der Gerätefreigabe teilen oder in Browsern ohne Freigabefunktion kopieren. Es werden keine Vorratsdaten geteilt.

## Deine Daten

Die Einträge bleiben im lokalen Speicher dieses Browsers auf diesem Gerät. Es gibt keine Konten, Cloud-Synchronisierung oder eingebaute Analyse. Beim Wechsel von Browser oder Gerät die CSV-Datei sichern und dort wiederherstellen. Das Löschen der Browserdaten kann die lokale Liste entfernen.

Nutze die CSV-Sicherung regelmäßig. Wenn gespeicherte Daten unlesbar sind, blockiert die App normale Änderungen, damit sie den beschädigten Stand nicht überschreiben. Lade zuerst eine Sicherung; die Wiederherstellungskopie der unlesbaren Daten kann zusätzlich heruntergeladen werden. Gleichzeitige Änderungen in mehreren Tabs werden erkannt und Speichervorgänge nach Möglichkeit koordiniert.

## Grenzen

- Die App beurteilt weder Haltbarkeit noch Frische oder Lebensmittelsicherheit. Datumsfelder sind nur eigene Notizen.
- Die lokale Speicherung ist nicht verschlüsselt und kein Schutz vor anderen Personen mit Zugriff auf dasselbe Browserprofil.
- Es gibt keine automatische Synchronisierung zwischen Geräten.

## Rückmeldung

Über den Link in der App kannst du freiwillig eine Rückmeldung als öffentliches GitHub-Issue senden. Der Link übernimmt keine Einträge aus deiner Liste. GitHub zeigt eingereichte Rückmeldungen öffentlich an und verlangt zum Absenden ein GitHub-Konto. Bitte füge keine Vorrats- oder persönlichen Daten ein.

## Entwicklung

- `index.html` enthält die Anwendung.
- `service-worker.js` stellt den Offline-Aufruf bereit.
- `manifest.webmanifest` beschreibt die installierbare Web-App.

