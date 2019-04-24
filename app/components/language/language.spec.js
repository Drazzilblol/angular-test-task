import components from "../componentsModule"


describe("language component", () => {

    let $compile;
    let scope;
    let element;
    let english = {
        en: "English",
        ru: "Russian"
    };
    let russian = {
        en: "Английский",
        ru: "Русский"
    };

    beforeEach(angular.mock.module("components", ($translateProvider) => {
            $translateProvider.translations('en', {
                LANGUAGES: english
            });
            $translateProvider.translations('ru', {
                LANGUAGES: russian
            });
            $translateProvider.preferredLanguage("en");

        }
    ));

    beforeEach(inject(($rootScope, _$compile_) => {
        scope = $rootScope.$new();
        $compile = _$compile_;
        element = angular.element("<language/>");
        element = $compile(element)(scope);
        scope.$digest();
    }));

    it("check is languages list loaded", () => {
        expect(element.text()).toContain(english.en);
        expect(element.text()).toContain(english.ru);
    });

    it("check language change", () => {
        element.find("select").val("ru").triggerHandler('change');
        expect(element.text()).toContain(russian.en);
        expect(element.text()).toContain(russian.ru);
    });
});


