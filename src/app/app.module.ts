import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { VgCoreModule } from "videogular2/compiled/core";
import { VgControlsModule } from "videogular2/compiled/controls";

import { SingleMediaPlayer } from "./single-media-player";

@NgModule({
  declarations: [SingleMediaPlayer],
  imports: [BrowserModule, VgCoreModule, VgControlsModule],
  providers: [],
  bootstrap: [SingleMediaPlayer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
