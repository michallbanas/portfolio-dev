Feature: Testing Anchors

    Scenario: Social icon anchors
        When all anchors are tested
        Then all anchors should be visible
        And have a valid href attribute
        And have a valid target attribute
        And have a valid rel attribute
        
        