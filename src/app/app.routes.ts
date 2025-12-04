import { Routes } from '@angular/router';
import { Home } from './component/shared/home/home';

import { LoginComponent } from './component/shared/login/login.component'

import { RoutedAdminPlist } from './component/blog/routed-admin-plist/routed-admin-plist';
import { RoutedAdminView } from './component/blog/routed-admin-view/routed-admin-view';
import { RoutedUserPlist } from './component/blog/routed-user-plist/routed-user-plist';
import { RoutedUserView } from './component/blog/routed-user-view/routed-user-view';
import { RoutedAdminEdit } from './component/blog/routed-admin-edit/routed-admin-edit';
import { RoutedAdminNew } from './component/blog/routed-admin-new/routed-admin-new';
import { RoutedAdminRemove } from './component/blog/routed-admin-remove/routed-admin-remove';
import { RoutedUserPlistPavon } from './component/pavon/routed-user-plist/routed-user-plist';
import { RoutedUserViewPavon } from './component/pavon/routed-user-view/routed-user-view';
import { RoutedAdminPlistPavon } from './component/pavon/routed-admin-plist/routed-admin-plist';
import { RoutedAdminEditPavon } from './component/pavon/routed-admin-edit/routed-admin-edit';
import { RoutedAdminNewPavon } from './component/pavon/routed-admin-new/routed-admin-new';
import { RoutedAdminRemovePavon } from './component/pavon/routed-admin-remove/routed-admin-remove';
import { RoutedAdminViewPavon } from './component/pavon/routed-admin-view/routed-admin-view';
import { RoutedAdminEdit as RoutedAdminEditSilvestre } from './component/silvestre/routed-admin-edit/routed-admin-edit';
import { RoutedAdminNew as RoutedAdminNewSilvestre } from './component/silvestre/routed-admin-new/routed-admin-new';
import { RoutedAdminRemove as RoutedAdminRemoveSilvestre } from './component/silvestre/routed-admin-remove/routed-admin-remove';
import { RoutedAdminPlist as RoutedAdminPlistSilvestre } from './component/silvestre/routed-admin-plist/routed-admin-plist';
import { RoutedAdminView as RoutedAdminViewSilvestre } from './component/silvestre/routed-admin-view/routed-admin-view';
import { RoutedUserPlist as RoutedUserPlistSilvestre } from './component/silvestre/routed-user-plist/routed-user-plist';
import { RoutedUserView as RoutedUserViewSilvestre } from './component/silvestre/routed-user-view/routed-user-view';
import { UskiVisitasPage } from './component/uski/pages/visitas/visitas.page';
import { UskiAdminPage } from './component/uski/pages/admin/admin.page';
import { UskiAdminRemovePage } from './component/uski/pages/admin-remove/admin-remove.page';
import { UskiAdminViewPage } from './component/uski/pages/admin-view/admin-view.page';
import { UskiVisitasNewPage } from './component/uski/pages/visitas-new/visitas-new.page';
import { UskiVisitasViewPage } from './component/uski/pages/visitas-view/visitas-view.page';
import { RoutedAdminPlistCalinescu } from './component/calinescu/routed-admin-plist/routed-admin-plist';
import { RoutedAdminViewCalinescu } from './component/calinescu/routed-admin-view/routed-admin-view';
import { RoutedAdminNewCalinescu } from './component/calinescu/routed-admin-new/routed-admin-new';
import { RoutedAdminEditCalinescu } from './component/calinescu/routed-admin-edit/routed-admin-edit';
import { RoutedAdminRemoveCalinescu } from './component/calinescu/routed-admin-remove/routed-admin-remove';
import { RoutedUserPlistCalinescu } from './component/calinescu/routed-user-plist/routed-user-plist';
import { RoutedUserViewCalinescu } from './component/calinescu/routed-user-view/routed-user-view';
import { RoutedUserPlistGarcia } from './component/garcia/routed-user-plistGarcia/Garciarouted-user-plist';
import { RoutedUserViewGarcia } from './component/garcia/routed-user-viewGarcia/Garciarouted-user-view';
import { RoutedAdminPlistGarcia } from './component/garcia/routed-admin-plistGarcia/Garciarouted-admin-plist';
import { RoutedAdminViewGarcia } from './component/garcia/routed-admin-viewGarcia/Garciarouted-admin-view';
import { RoutedAdminNewGarcia } from './component/garcia/routed-admin-newGarcia/Garciarouted-admin-new';
import { RoutedAdminEditGarcia } from './component/garcia/routed-admin-editGarcia/Garciarouted-admin-edit';
import { RoutedAdminRemoveGarcia } from './component/garcia/routed-admin-removeGarcia/Garciarouted-admin-remove';
import { FernandezRoutedAdminPlist } from './component/fernandez-idea/routed-admin-plist/routed-admin-plist';
import { FernandezRoutedAdminView } from './component/fernandez-idea/routed-admin-view/routed-admin-view';
import { FernandezRoutedAdminEdit } from './component/fernandez-idea/routed-admin-edit/routed-admin-edit';
import { FernandezRoutedAdminNew } from './component/fernandez-idea/routed-admin-new/routed-admin-new';
import { FernandezRoutedAdminRemove } from './component/fernandez-idea/routed-admin-remove/routed-admin-remove';
import { FernandezRoutedUserPlist } from './component/fernandez-idea/routed-user-plist/routed-user-plist';
import { FernandezRoutedUserView } from './component/fernandez-idea/routed-user-view/routed-user-view';
import { RoutedAdminPlist as RoutedAdminPlistPalomares } from './component/palomares/routed-admin-plist/routed-admin-plist';
import { RoutedAdminView as RoutedAdminViewPalomares } from './component/palomares/routed-admin-view/routed-admin-view';
import { RoutedUserPlist as RoutedUserPlistPalomares } from './component/palomares/routed-user-plist/routed-user-plist';
import { RoutedUserView as RoutedUserViewPalomares } from './component/palomares/routed-user-view/routed-user-view';
import { RoutedAdminEdit as RoutedAdminEditPalomares } from './component/palomares/routed-admin-edit/routed-admin-edit';
import { RoutedAdminNew as RoutedAdminNewPalomares } from './component/palomares/routed-admin-new/routed-admin-new';
import { RoutedAdminRemove as RoutedAdminRemovePalomares } from './component/palomares/routed-admin-remove/routed-admin-remove';
import { SalinasRoutedUserPlist } from './component/salinasReceta/routed-user-plist/routed-user-plist';
import { SalinasRoutedUserView } from './component/salinasReceta/routed-user-view/routed-user-view';
import { SalinasRoutedAdminPlist } from './component/salinasReceta/routed-admin-plist/routed-admin-plist';
import { SalinasRoutedAdminView } from './component/salinasReceta/routed-admin-view/routed-admin-view';
import { SalinasRoutedAdminNew } from './component/salinasReceta/routed-admin-new/routed-admin-new';
import { SalinasRoutedAdminEdit } from './component/salinasReceta/routed-admin-edit/routed-admin-edit';
import { SalinasRoutedAdminRemove } from './component/salinasReceta/routed-admin-remove/routed-admin-remove';
import {PallasPlist} from './component/pallas/pallas-plist/pallas-plist'
import {PallasView} from './component/pallas/pallas-view/pallas-view'
import {PallasNew} from './component/pallas/pallas-new/pallas-new'
import {PallasUpdate} from './component/pallas/pallas-update/pallas-update'
import {PallasRemove} from './component/pallas/pallas-remove/pallas-remove'
import { PallasHome } from './component/pallas/pallas-home/pallas-home';
import { AlcaldeRoutedAdminPlist } from './component/alcalde/routed-admin-plist/routed-admin-plist';
import { AlcaldeRoutedAdminView } from './component/alcalde/routed-admin-view/routed-admin-view';
import { AlcaldeRoutedAdminNew } from './component/alcalde/routed-admin-new/routed-admin-new';
import { AlcaldeRoutedAdminEdit } from './component/alcalde/routed-admin-edit/routed-admin-edit';
import { AlcaldeRoutedAdminRemove } from './component/alcalde/routed-admin-remove/routed-admin-remove';
import { AlcaldeRoutedUserPlist } from './component/alcalde/routed-user-plist/routed-user-plist';
import { AlcaldeRoutedUserView } from './component/alcalde/routed-user-view/routed-user-view';
import { SemperteguiRoutedUserPlist } from './component/sempertegui/routed-user-plist/sempertegui-routed-user-plist';
import { SemperteguiRoutedAdminPlist } from './component/sempertegui/routed-admin-plist/sempertegui-routed-admin-plist';
import { SemperteguiRoutedAdminView } from './component/sempertegui/routed-admin-view/sempertegui-routed-admin-view';
import { SemperteguiRoutedAdminEdit } from './component/sempertegui/routed-admin-edit/sempertegui-routed-admin-edit';
import { SemperteguiRoutedAdminRemove } from './component/sempertegui/routed-admin-remove/sempertegui-routed-admin-remove';
import { SemperteguiRoutedAdminNew } from './component/sempertegui/routed-admin-new/sempertegui-routed-admin-new';
import { SoaresRoutedAdminPlist } from './component/soares/routed-admin-plist/routed-admin-plist';
import { SoaresRoutedAdminNew } from './component/soares/routed-admin-new/routed-admin-new';
import { SoaresRoutedAdminEdit } from './component/soares/routed-admin-edit/routed-admin-edit';
import { SoaresRoutedAdminRemove } from './component/soares/routed-admin-remove/routed-admin-remove';
import { SoaresRoutedUserPlist } from './component/soares/routed-user-plist/routed-user-plist';
import { PreguntasPorTemaComponent } from './component/soares/preguntas-por-tema/preguntas-por-tema';
import { RoutedAlfonsoAdminPlist } from './component/alfonso/routed-admin-plist/routed-admin-plist';
import { RoutedAlfonsoAdminView } from './component/alfonso/routed-admin-view/routed-admin-view';
import { RoutedAlfonsoAdminNew } from './component/alfonso/routed-admin-new/routed-admin-new';
import { RoutedAlfonsoAdminEdit } from './component/alfonso/routed-admin-edit/routed-admin-edit';
import { RoutedAlfonsoAdminRemove } from './component/alfonso/routed-admin-remove/routed-admin-remove';
import { RoutedAlfonsoUserPlist } from './component/alfonso/routed-user-plist/routed-user-plist';
import { RoutedAlfonsoUserView } from './component/alfonso/routed-user-view/routed-user-view';

// Reyna (Frases Motivacionales) imports
import { RoutedAdminPlist as ReynaAdminPlist } from './component/reyna/reyna-routed-admin-plist/routed-admin-plist';
import { RoutedAdminView as ReynaAdminView } from './component/reyna/reyna-routed-admin-view/routed-admin-view';
import { RoutedUserPlist as ReynaUserPlist } from './component/reyna/reyna-routed-user-plist/routed-user-plist';
import { RoutedUserView as ReynaUserView } from './component/reyna/reyna-routed-user-view/routed-user-view';
import { RoutedAdminEdit as ReynaAdminEdit } from './component/reyna/reyna-routed-admin-edit/routed-admin-edit';
import { RoutedAdminNew as ReynaAdminNew } from './component/reyna/reyna-routed-admin-new/routed-admin-new';
import { RoutedAdminRemove as ReynaAdminRemove } from './component/reyna/reyna-routed-admin-remove/routed-admin-remove';
import { CastanyeraRoutedAdminPlist } from './component/castanyera/castanyera-routed-admin-plist/routed-admin-plist';
import { CastanyeraRoutedAdminView } from './component/castanyera/castanyera-routed-admin-view/routed-admin-view';
import { CastanyeraRoutedUserPlist } from './component/castanyera/castanyera-routed-user-plist/routed-user-plist';
import { CastanyeraRoutedUserView } from './component/castanyera/castanyera-routed-user-view/routed-user-view';
import { CastanyeraRoutedAdminEdit } from './component/castanyera/castanyera-routed-admin-edit/routed-admin-edit';
import { CastanyeraRoutedAdminNew } from './component/castanyera/castanyera-routed-admin-new/routed-admin-new';
import { CastanyeraRoutedAdminRemove } from './component/castanyera/castanyera-routed-admin-remove/routed-admin-remove';

//imports Alan
import { RoutedAlcanyizMenu } from './component/alcanyiz/routed-alcanyiz-menu/routed-alcanyiz-menu'
import { RoutedAlcanyizUserView } from './component/alcanyiz/routed-alcanyiz-user-view/routed-alcanyiz-user-view';
import { RoutedAlcanyizAdminQuestionlist } from './component/alcanyiz/routed-alcanyiz-admin-questionlist/routed-alcanyiz-admin-questionlist';
import { RoutedAlcanyizAdminView } from './component/alcanyiz/routed-alcanyiz-admin-view/routed-alcanyiz-admin-view';
import { RoutedAlcanyizUserList } from './component/alcanyiz/routed-alcanyiz-user-list/routed-alcanyiz-user-list';
import { RoutedAlcanyizAdminCreate } from './component/alcanyiz/routed-alcanyiz-admin-create/routed-alcanyiz-admin-create';
import { RoutedAlcanyizAdminEdit } from './component/alcanyiz/routed-alcanyiz-admin-edit/routed-alcanyiz-admin-edit';
import { RoutedAlcanyizAdminRemove } from './component/alcanyiz/routed-alcanyiz-admin-remove/routed-alcanyiz-admin-remove';
import { RoutedAlcanyizGame } from './component/alcanyiz/routed-alcanyiz-game/routed-alcanyiz-game';

//imports Contreras
import { RoutedUserPlist as TablonRoutedUserPlist } from './component/contreras/tablon/routed-user-plist/routed-user-plist';
import { RoutedUserView as TablonRoutedUserView } from './component/contreras/tablon/routed-user-view/routed-user-view';
import { RoutedAdminPlist as TablonRoutedAdminPlist } from './component/contreras/tablon/routed-admin-plist/routed-admin-plist';
import { RoutedAdminView as TablonRoutedAdminView } from './component/contreras/tablon/routed-admin-view/routed-admin-view';
import { RoutedAdminNew as TablonRoutedAdminNew } from './component/contreras/tablon/routed-admin-new/routed-admin-new';
import { RoutedAdminEdit as TablonRoutedAdminEdit } from './component/contreras/tablon/routed-admin-edit/routed-admin-edit';
import { RoutedAdminRemove as TablonRoutedAdminRemove } from './component/contreras/tablon/routed-admin-remove/routed-admin-remove';
import { RoutedAdminPlistZanon } from './component/zanon/routed-admin-plist/routed-admin-plist';
import { RoutedAdminViewZanon } from './component/zanon/routed-admin-view/routed-admin-view';
import { RoutedUserPlistZanon } from './component/zanon/routed-user-plist/routed-user-plist';
import { RoutedUserViewZanon } from './component/zanon/routed-user-view/routed-user-view';
import { RoutedAdminEditZanon } from './component/zanon/routed-admin-edit/routed-admin-edit';
import { RoutedAdminNewZanon } from './component/zanon/routed-admin-new/routed-admin-new';
import { RoutedAdminRemoveZanon } from './component/zanon/routed-admin-remove/routed-admin-remove';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'blog', component: RoutedUserPlist },
  { path: 'blog/post/:id', component: RoutedUserView },
  { path: 'blog/plist', component: RoutedAdminPlist },
  { path: 'blog/view/:id', component: RoutedAdminView },
  { path: 'blog/new', component: RoutedAdminNew },
  { path: 'blog/edit/:id', component: RoutedAdminEdit },
  { path: 'blog/remove/:id', component: RoutedAdminRemove },
  { path: 'recurso', component: RoutedUserPlistPavon },
  { path: 'recurso/post/:id', component: RoutedUserViewPavon },
  { path: 'recurso/plist', component: RoutedAdminPlistPavon },
  { path: 'recurso/view/:id', component: RoutedAdminViewPavon },
  { path: 'recurso/new', component: RoutedAdminNewPavon },
  { path: 'recurso/edit/:id', component: RoutedAdminEditPavon },
  { path: 'recurso/remove/:id', component: RoutedAdminRemovePavon },
  { path: 'silvestre', component: RoutedUserPlistSilvestre },
  { path: 'silvestre/post/:id', component: RoutedUserViewSilvestre },
  { path: 'silvestre/plist', component: RoutedAdminPlistSilvestre },
  { path: 'silvestre/view/:id', component: RoutedAdminViewSilvestre },
  { path: 'silvestre/new', component: RoutedAdminNewSilvestre },
  { path: 'silvestre/edit/:id', component: RoutedAdminEditSilvestre },
  { path: 'silvestre/remove/:id', component: RoutedAdminRemoveSilvestre },

  { path: 'login', component: LoginComponent },

  // Vladislav Uski
  // public
  { path: 'visitas', component: UskiVisitasPage},
  { path: 'visitas/new', component: UskiVisitasNewPage },
  { path: 'visitas/view/:id', component: UskiVisitasViewPage },
  // admin
  { path: 'visitas/dashboard', component: UskiAdminPage },
  { path: 'visitas/dashboard/view/:id', component: UskiAdminViewPage },
  { path: 'visitas/dashboard/remove/:id', component: UskiAdminRemovePage },

  // Reyna (Frases Motivacionales) routes
  { path: 'reyna', component: ReynaUserPlist },
  { path: 'reyna/post/:id', component: ReynaUserView },
  { path: 'reyna/plist', component: ReynaAdminPlist },
  { path: 'reyna/view/:id', component: ReynaAdminView },
  { path: 'reyna/new', component: ReynaAdminNew },
  { path: 'reyna/edit/:id', component: ReynaAdminEdit },
  { path: 'reyna/remove/:id', component: ReynaAdminRemove },
  { path: 'calinescu', component: RoutedUserPlistCalinescu },
  { path: 'calinescu/item/:id', component: RoutedUserViewCalinescu },
  { path: 'calinescu/plist', component: RoutedAdminPlistCalinescu },
  { path: 'calinescu/view/:id', component: RoutedAdminViewCalinescu },
  { path: 'calinescu/new', component: RoutedAdminNewCalinescu },
  { path: 'calinescu/edit/:id', component: RoutedAdminEditCalinescu },
  { path: 'calinescu/remove/:id', component: RoutedAdminRemoveCalinescu },
  { path: 'garcia', component: RoutedUserPlistGarcia},
  { path: 'garcia/post/:id', component: RoutedUserViewGarcia },
  { path: 'garcia/plist', component: RoutedAdminPlistGarcia },
  { path: 'garcia/view/:id', component: RoutedAdminViewGarcia },
  { path: 'garcia/new', component: RoutedAdminNewGarcia },
  { path: 'garcia/edit/:id', component: RoutedAdminEditGarcia },
  { path: 'garcia/remove/:id', component: RoutedAdminRemoveGarcia },

  { path: 'castanyera', component: CastanyeraRoutedUserPlist },
  { path: 'castanyera/post/:id', component: CastanyeraRoutedUserView },
  { path: 'castanyera/plist', component: CastanyeraRoutedAdminPlist },
  { path: 'castanyera/view/:id', component: CastanyeraRoutedAdminView },
  { path: 'castanyera/new', component: CastanyeraRoutedAdminNew },
  { path: 'castanyera/edit/:id', component: CastanyeraRoutedAdminEdit },
  { path: 'castanyera/remove/:id', component: CastanyeraRoutedAdminRemove },
  // Rutas de Fernandez Ideas - Administración
  { path: 'fernandez-idea/admin/plist', component: FernandezRoutedAdminPlist },
  { path: 'fernandez-idea/admin/view/:id', component: FernandezRoutedAdminView },
  { path: 'fernandez-idea/admin/new', component: FernandezRoutedAdminNew },
  { path: 'fernandez-idea/admin/edit/:id', component: FernandezRoutedAdminEdit },
  { path: 'fernandez-idea/admin/remove/:id', component: FernandezRoutedAdminRemove },
  // Rutas de Fernandez Ideas - Usuario
  { path: 'fernandez-idea/user/plist', component: FernandezRoutedUserPlist },
  { path: 'fernandez-idea/user/view/:id', component: FernandezRoutedUserView },
  { path: 'fernandez-idea', redirectTo: 'fernandez-idea/user/plist', pathMatch: 'full' },
  { path: 'palomares', component: RoutedUserPlistPalomares },
  { path: 'palomares/task/:id', component: RoutedUserViewPalomares },
  { path: 'palomares/plist', component: RoutedAdminPlistPalomares },
  { path: 'palomares/view/:id', component: RoutedAdminViewPalomares },
  { path: 'palomares/new', component: RoutedAdminNewPalomares },
  { path: 'palomares/edit/:id', component: RoutedAdminEditPalomares },
  { path: 'palomares/remove/:id', component: RoutedAdminRemovePalomares },
  // Rutas de Joan Salinas
  { path:'receta', component: SalinasRoutedUserPlist },
  { path: 'receta/post/:id', component: SalinasRoutedUserView },
  { path: 'receta/plist', component: SalinasRoutedAdminPlist },
  { path: 'receta/view/:id', component: SalinasRoutedAdminView },
  { path: 'receta/new', component: SalinasRoutedAdminNew },
  { path: 'receta/edit/:id', component: SalinasRoutedAdminEdit },
  { path: 'receta/remove/:id', component: SalinasRoutedAdminRemove },

  { path: 'pallas/plist', component: PallasPlist },
  { path: 'pallas/new', component: PallasNew },
  { path: 'pallas/view/:id', component: PallasView },
  { path: 'pallas/edit/:id', component: PallasUpdate },
  { path: 'pallas/remove/:id', component: PallasRemove },
  { path: 'pallas', component: PallasHome },
  { path: 'alfonso', component: RoutedAlfonsoUserPlist },
  { path: 'alfonso/respuesta/:id', component: RoutedAlfonsoUserView },
  { path: 'alfonso/plist', component: RoutedAlfonsoAdminPlist },
  { path: 'alfonso/view/:id', component: RoutedAlfonsoAdminView },
  { path: 'alfonso/new', component: RoutedAlfonsoAdminNew },
  { path: 'alfonso/edit/:id', component: RoutedAlfonsoAdminEdit },
  { path: 'alfonso/remove/:id', component: RoutedAlfonsoAdminRemove },
  { path: 'alcalde', component: AlcaldeRoutedUserPlist },
  { path: 'alcalde/post/:id', component: AlcaldeRoutedUserView },
  { path: 'alcalde/plist', component: AlcaldeRoutedAdminPlist },
  { path: 'alcalde/view/:id', component: AlcaldeRoutedAdminView },
  { path: 'alcalde/new', component: AlcaldeRoutedAdminNew },
  { path: 'alcalde/edit/:id', component: AlcaldeRoutedAdminEdit },
  { path: 'alcalde/remove/:id', component: AlcaldeRoutedAdminRemove },
  { path: 'sempertegui', component: SemperteguiRoutedUserPlist },
  { path: 'sempertegui/plist', component: SemperteguiRoutedAdminPlist },
  { path: 'sempertegui/view/:id', component: SemperteguiRoutedAdminView},
  { path: 'sempertegui/edit/:id', component: SemperteguiRoutedAdminEdit },
  { path: 'sempertegui/remove/:id', component: SemperteguiRoutedAdminRemove },
  { path: 'sempertegui/new', component: SemperteguiRoutedAdminNew },
  { path: 'alcanyiz', component: RoutedAlcanyizMenu },
  { path: 'alcanyiz/allquestion', component: RoutedAlcanyizUserList },
  { path: 'alcanyiz/question/:id', component: RoutedAlcanyizUserView },
  { path: 'alcanyiz/questionlist', component: RoutedAlcanyizAdminQuestionlist },
  { path: 'alcanyiz/questionview/:id', component: RoutedAlcanyizAdminView },
  { path: 'alcanyiz/questioncreate', component: RoutedAlcanyizAdminCreate },
  { path: 'alcanyiz/questionedit/:id', component: RoutedAlcanyizAdminEdit },
  { path: 'alcanyiz/questionremove/:id', component: RoutedAlcanyizAdminRemove },
  { path: 'alcanyiz/questiongame', component: RoutedAlcanyizGame },
  { path: 'soares/user/plist', component: SoaresRoutedUserPlist },
  { path: 'soares/user/temas', component: PreguntasPorTemaComponent },
  { path: 'soares/user/new', component: SoaresRoutedAdminNew },
  { path: 'soares/admin/plist', component: SoaresRoutedAdminPlist },
  { path: 'soares/admin/new', component: SoaresRoutedAdminNew },
  { path: 'soares/admin/edit/:id', component: SoaresRoutedAdminEdit },
  { path: 'soares/admin/remove/:id', component: SoaresRoutedAdminRemove },
  { path: 'tablon', component: TablonRoutedUserPlist },
  { path: 'tablon/post/:id', component: TablonRoutedUserView },
  { path: 'tablon/plist', component: TablonRoutedAdminPlist },
  { path: 'tablon/view/:id', component: TablonRoutedAdminView },
  { path: 'tablon/new', component: TablonRoutedAdminNew },
  { path: 'tablon/edit/:id', component: TablonRoutedAdminEdit },
  { path: 'tablon/remove/:id', component: TablonRoutedAdminRemove },

  { path: 'zanon', component: RoutedUserPlistZanon},
  { path: 'zanon/post/:id', component: RoutedUserViewZanon },
  { path: 'zanon/plist', component: RoutedAdminPlistZanon },
  { path: 'zanon/view/:id', component: RoutedAdminViewZanon },
  { path: 'zanon/new', component: RoutedAdminNewZanon },
  { path: 'zanon/edit/:id', component: RoutedAdminEditZanon },
  { path: 'zanon/remove/:id', component: RoutedAdminRemoveZanon },
];
