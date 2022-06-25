const translations = {
  en: {
    locale: 'en',
    messages: {
      // Languages
      english: 'English',
      romanian: 'Romanian',

      //login translations
      login_failed: "Login failed! Please try again later.",
      login_success: "Login successfully!",

      //navbar translations
      students: 'Students',
      secretaries: 'Secretaries',
      certificates: 'Certificates',
      logout: "Logout",

      //students translations
      add_student: "Add Student",
      search_student: "Search Student",

      //students modals translations
      view_student: "View Student",
      edit_student: "Edit Student",
      delete_student: "Delete Student",
      delete_student_description: "Are you sure you want to delete student",
      student_successfully_updated: "Student successfully updated!",
      student_successfully_deleted: "Student successfully deleted!",
      student_successfully_added: "Student successfully added!",
      student_unsuccessfully_updated: "Student couldn't be updated!",
      student_unsuccessfully_deleted: "Student couldn't be deleted!",
      student_unsuccessfully_added: "Student couldn't be added!",

      //secreatries translations
      add_secretary: "Adauga Secretary",
      search_secretary: "Cauta Secretary",
      delete_secretary: "Delete Secretary",
      delete_secretary_description: "Are you sure you want to delete secretary",
      secreatry_successfully_updated: "Secretary successfully updated!",
      secreatry_successfully_deleted: "Secretary successfully deleted!",
      secreatry_successfully_added: "Secretary successfully added!",
      secreatry_unsuccessfully_updated: "Secretary couldn't be updated!",
      secreatry_unsuccessfully_deleted: "Secretary couldn't be deleted!",
      secreatry_unsuccessfully_added: "Secretary couldn't be added!",

      //table translations
      id: "ID",
      firstName: "First Name",
      lastName: "Last Name",
      year: "Year",
      specialization: "Specialization",
      class: "Class",
      code: "Code",
      actions: "Actions",
      email: "Email",
      address: "Address",

      //common translations
      delete: "Delete",
      first: "First",
      second: "Second",
      third: "Third",
      fourth: "Fourth",
      close: "Close",
      edit: "Edit",
      add: "Add",
      view: "View",
      previous: "Previous",
      next: "Next",
      download: "Download",
      page_not_found: "Error 404, page not found",
      filter: "Filter",
      remove_filter: "Remove filter",

      //validations translate
      firstName_validation_min: "First name must be at least 3 characters long",
      validation_max: "Exceded the maximum number of characters",
      firstName_validation_matches: "First name must contain only letters and dashes",
      validation_required: "This field is mandatory",
      lastName_validation_min: "Last name must be at least 3 characters long",
      lastName_validation_matches: "Last name must contain only letters and dashes",
      address_validation_min: "Address name must be at least 3 characters long",
      email_validation_invalid: "Email is invalid",

      //certifications translate
      student_certificate_input: "Description",
      student_certificate_title: "Student Certificate",
    }
  },

  ro: {
    locale: 'ro',
    messages: {
      // Languages
      english: 'Engleză',
      romanian: 'Română',

      //login translations
      login_failed: "Autentificare esuata! Va rugam sa incercati mai tarziu.",
      login_success: "Autentificare realizata cu succes!",

      //navbar translations
      students: "Studenti",
      secretaries: "Secretare",
      certificates: "Adeverinte",
      logout: "Delogare",

      //students translations
      add_student: "Adauga Student",
      search_student: "Cauta Student",

      //students modals translations
      view_student: "Vizualizati Student",
      edit_student: "Editati Student",
      delete_student: "Stergeti Student",
      delete_student_description: "Sunteti sigur ca doriti sa stergeti studentul",
      student_successfully_updated: "Student updatat cu succes!",
      student_successfully_deleted: "Student sters cu succes!",
      student_successfully_added: "Student adaugat cu succes!",
      student_unsuccessfully_updated: "Student updatat fara succes!",
      student_unsuccessfully_deleted: "Student sters fara succes!",
      student_unsuccessfully_added: "Student adaugat fara succes!",

      //secreatries translations
      add_secretary: "Adauga Secretara",
      search_secretary: "Cauta Secretara",
      delete_secretary: "Stergeti Secretara",
      delete_secretary_description: "Sunteti sigur ca doriti sa stergeti secretara",
      secretary_successfully_updated: "Secreatara updatata cu succes!",
      secretary_successfully_deleted: "Secreatara stears cu succes!",
      secretary_successfully_added: "Secreatara adaugata cu succes!",
      secretary_unsuccessfully_updated: "Secreatara updatata fara succes!",
      secretary_unsuccessfully_deleted: "Secreatara stears fara succes!",
      secretary_unsuccessfully_added: "Secreatara adaugata fara succes!",

      //table translations
      id: "ID",
      firstName: "Prenume",
      lastName: "Nume",
      year: "An",
      specialization: "Specializare",
      class: "Grupa",
      code: "Cod",
      actions: "Actiuni",
      email: "Email",
      address: "Adresa",

      //common translat
      delete: "Stergeti",
      first: "Primul",
      second: "Al doilea",
      third: "Al treilea",
      fourth: "Al patrulea",
      close: "Inchide",
      edit: "Editati",
      add: "Adauga",
      view: "Vizualizati",
      previous: "Inapoi",
      next: "Inainte",
      download: "Descarcare",
      page_not_found: "Eroare 404, pagina nu exista!",
      filter: "Filtru",
      remove_filter: "Sterge filtru",

      //validations translate
      firstName_validation_min: "Prenumele trebuie sa contina cel putin 3 caractere",
      validation_max: "Numarul maxim de caractere a fost depasit",
      firstName_validation_matches: "Prenumele trebuie sa contina doar litere, spatii si linii",
      validation_required: "Acest camp este obligatoriu",
      lastName_validation_min: "Numele trebuie sa contina cel putin 3 caractere",
      lastName_validation_matches: "Numele trebuie sa contina doar litere, spatii si linii",
      address_validation_min: "Adresa trebuie sa contina cel putin 3 caractere",
      email_validation_invalid: "Adresa de email este invalida",

      //certifications translate
      student_certificate_input: "Descriere",
      student_certificate_title: "Adeverinta Student",
    }
  }
}

export default translations;
